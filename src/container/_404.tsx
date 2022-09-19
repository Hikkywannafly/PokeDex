import React from 'react'
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
type Props = {}

const NotFound: React.FC = (props: Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const goBackHome = () => {
        console.log('goBackHome')
        navigate("/");
    }
    return (
        <>
            <div className="absolute h-full w-full flex flex-col items-center justify-center bg-white">
                <div className="text-xl items-center text-center w-auto tracking-[1px]">
                    <div className="text-5xl font-bold mb-5 items-center flex flex-col justify-center">
                        <img
                            className="h-52 w-52 "
                            src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/329c3367-7ed4-4bb1-8fd7-c85c5b0d86c1/da5vi83-76880c79-cc65-4a69-9d64-78d8c0fb6f42.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMyOWMzMzY3LTdlZDQtNGJiMS04ZmQ3LWM4NWM1YjBkODZjMVwvZGE1dmk4My03Njg4MGM3OS1jYzY1LTRhNjktOWQ2NC03OGQ4YzBmYjZmNDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p1KKM4S36BpgBcGYqzPSBKx6OC2NTpMAPbUMWaczncQ'
                            alt='oho' />
                        <p className="my-8 text-[100px] text-gray-500 font-bold stroke-slate-700 drop-shadow-2xl">4 0 4</p>
                    </div>
                    The requested page
                    <span className="bg-black rounded-lg px-1 py-0.5 text-white mx-2">
                        {location.pathname}
                    </span>
                    could not be found.
                    <br></br>
                    Check that you typed the URL correctly!
                    <br></br>
                    <button
                        onClick={goBackHome}
                        type="button" className=" mt-10 text-black border border-black hover:bg-black hover:text-white focus:ring-4 focus:outline-none duration-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        GO BACK HOME &nbsp;&nbsp;
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" ></path></svg>
                        <span className="sr-only">Icon description</span>

                    </button>
                </div>

            </div>
        </>
    )
}

export default NotFound 