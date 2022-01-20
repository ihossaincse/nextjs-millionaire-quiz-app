import React from 'react'
import QuestionAnswer from './QuestionAnswer'

const Left = ({ quesAns, activeNumber, setActiveNumber, ansStatus, setAnsStatus }) => {
    return (
        <div className="bg-[url(/images/bg.jpg)] bg-cover bg-center w-full md:w-8/12 p-10">
            {quesAns.map(({id, ques, ans}, index) => (
                id === activeNumber ? 
                    <QuestionAnswer 
                        id={id}
                        quesAns={quesAns}
                        amount={(index+1) < quesAns.length ? quesAns[index+1]["amount"] : 0} 
                        ques={ques} 
                        ans={ans} 
                        key={id} 
                        setActiveNumber={setActiveNumber} 
                        ansStatus={ansStatus} 
                        setAnsStatus={setAnsStatus} 
                        length={quesAns.length}
                    /> : ""
            ))}
        </div>
    )
}

export default Left
