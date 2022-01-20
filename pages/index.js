import { useState } from 'react';
import Layout from '../components/Layout';
import Left from "../components/Left";
import Right from "../components/Right";
import quesAns from "../data/quesAns";

export default function Home() {
  const [activeNumber, setActiveNumber] = useState(1);
  const [ansStatus, setAnsStatus] = useState([]);

  return (
    <Layout>
      <Left 
        quesAns={quesAns} 
        activeNumber={activeNumber} 
        setActiveNumber={setActiveNumber} 
        ansStatus={ansStatus} 
        setAnsStatus={setAnsStatus} 
      />
      <Right 
        quesAns={quesAns} 
        activeNumber={activeNumber} 
      />
    </Layout>
  )
}
