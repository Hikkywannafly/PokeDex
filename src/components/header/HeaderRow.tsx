import React from 'react'

type Props = {
    name: string,
    link: string,
}

const HeaderRow: React.FC<Props> = (props: Props) => {
    const { name, link } = props;
    return (
        <>
            <div className="row flex flex-row justify-center items-center">
                <img src={link} alt='Log' className="w-[30px] h-[30px] sm:mr-2 lg:m-5 lg:w-[40px] lg:h-[40px] "></img>
                <span className="hidden sm:block"> {name}</span>
            </div>

        </>

    )
}

export default HeaderRow