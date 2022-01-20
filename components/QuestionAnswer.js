import React, { useState } from 'react';

const QuestionAnswer = ({ id, quesAns, amount, ques, ans, setActiveNumber, ansStatus, setAnsStatus, length }) => {
    const [result, setResult] = useState();
    const [prize, setPrize] = useState(amount);
    console.log(prize);
    
    const handleResult = (status) => {
        setTimeout(() => {
            if(status) {
                if(length === id) {
                    setPrize(quesAns[0]["amount"]);
                    setResult(true);
                } else {
                    setActiveNumber(id+1);
                }
            } else {
                setResult(true);
            }
        }, 1000);
    }
    const handleClick = (text, correct) => {
        if(correct === true) {
            setAnsStatus([text, true]);
            handleResult(true);
        } else {
            setAnsStatus([text, false]);
            handleResult(false);
        }
    }

    return (
        <div className="flex flex-col justify-end h-full text-center">
            {result === true ? 
                (
                    <div className="">
                        <div className="px-3 py-2 mb-10 text-2xl font-semibold bg-black border-2 border-white rounded-md">You earned: ${prize}</div>
                    </div>
                ) : (
                    <>
                    <div className="">
                        <div className="p-2 mb-10 border-2 border-white rounded-md bg-violet-900">{ques}</div>
                        <div className="grid grid-cols-2 gap-4">
                            {ans.map(({text, correct}) => (
                                <div 
                                    className={`p-1 transition-all border-2 border-white rounded-md cursor-pointer bg-violet-900 hover:bg-blue-700 
                                    ${text === ansStatus[0] ? 
                                        ansStatus[1] === true ? "bg-green-900" : "bg-red-900" : 
                                    ""}`} 
                                    onClick={() => handleClick(text, correct)} 
                                    key={Math.random()}>
                                        {text}
                                </div>
                            ))}
                        </div>
                    </div>
                    </>
                )}
        </div>
    )
}

export default QuestionAnswer
