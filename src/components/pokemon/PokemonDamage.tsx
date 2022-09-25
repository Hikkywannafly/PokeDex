import React, { useState } from 'react'
import TypeBade from './TypeSmall/index,'
type Props = {
    types: any;
    title: string;
}

const PokemonDamage = (props: Props) => {
    const { types, title } = props
    const [damageD, setDamageD] = useState<any>([]);
    const [damageH, setDamageH] = useState<any>([]);
    const [damageN, setDamageN] = useState<any>([]);
    const d: any = [];
    const h: any = [];
    const n: any = [];
    const fuc__ = (arr1: any, arr2: any) => {
        arr1.push(
            ...arr2.map((index: any) => index.name),
        )
    }
    const removeDuplicates = (arr: any) => {
        return arr.filter((item: any, index: any) => arr.indexOf(item) === index);
    }
    const fetchDamage = async () => {
        types.forEach((type: any) => {
            fetch(`https://pokeapi.co/api/v2/type/${type}`)
                .then(res => res.json())
                // no time to fix this :)) this quickly
                .then(data => {
                    if (title === 'DAMAGE ATK') {
                        fuc__(d, data.damage_relations.double_damage_to);
                        fuc__(h, data.damage_relations.half_damage_to);
                        fuc__(n, data.damage_relations.no_damage_to);

                    }
                    if (title === 'DAMAGE DEF') {
                        fuc__(d, data.damage_relations.double_damage_from);
                        fuc__(h, data.damage_relations.half_damage_from);
                        fuc__(n, data.damage_relations.no_damage_from);
                    }
                    setDamageD(d);
                    setDamageH(h);
                    setDamageN(n);
                })
        })
    }
    React.useEffect(() => {
        fetchDamage();
    }, []);
    React.useEffect(() => {

    }, [damageD, damageH, damageN]);

    return (
        <div>
            <div className="flex flex-col justify-center">
                <h1 className=' px-6 text-xl font-bold'> {title}</h1>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 py-4 inline-block min-w-full sm:px-6 lg:px-8 overflow-hidden">

                    <table className="min-w-full text-left">
                        <tbody>

                            <tr className="border-b">
                                <td className="px-6 py-4 w-40  text-sm font-light text-gray-900">Double Damage </td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4  capitalize flex flex-row gap-4 max-w-xs">

                                    {removeDuplicates(damageD).map((item: any, index: number) => (
                                        <TypeBade key={index} type={item} />
                                    ))}

                                </td>
                            </tr>

                            <tr className="border-b">
                                <td className="px-6 py-4 w-10   text-sm font-light text-gray-900">Haft Damage</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4 capitalize flex flex-wrap gap-4 max-w-xs">
                                    {removeDuplicates(damageH).map((item: any, index: number) => (
                                        <TypeBade key={index} type={item} />
                                    ))}

                                </td>
                            </tr>
                            <tr className="border-b">
                                <td className="px-6 py-4 w-10   text-sm font-light text-gray-900">No Damage</td>
                                <td className="text-sm text-gray-900 font-medium px-6 py-4  capitalize flex flex-row gap-4">
                                    {removeDuplicates(damageN).map((item: any, index: number) => (
                                        <TypeBade key={index} type={item} />
                                    ))}
                                    {damageN.length === 0 && <span className="text-sm text-gray-900 font-medium px-6 py-4   capitalize flex flex-row gap-4">None</span>}
                                </td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div >
    )
}

export default PokemonDamage