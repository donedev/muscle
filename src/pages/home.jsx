import { useState, useEffect } from "react"
import { Header } from "../components"
import "./home.css"

export default function(){
    const [ statisticsList , setStatisticsList ] = useState([])
    const [ historyList    , setHistoryList ]    = useState([])
    
    useEffect(() => {
        
        if(historyList.length === 0) {
            setHistoryList([
                { date: new Date().toLocaleDateString(), content: [
                    { set: 1, name: "벤치프레스", weight: "10", weightUnit: "kg", time: 0 }
                    , { set: 2, name: "벤치프레스", weight: "10", weightUnit: "kg", time: 0 }
                    , { set: 3, name: "벤치프레스", weight: "10", weightUnit: "kg", time: 0 }
                    , { set: 4, name: "벤치프레스", weight: "10", weightUnit: "kg", time: 0 }
                    , { set: 5, name: "벤치프레스", weight: "10", weightUnit: "kg", time: 0 }
                ]}
            ])
        }
    }, [statisticsList, historyList])

    return (
        <div>
            {/* <Header /> */}
            
            <ExerciseStatisticsContainer list={statisticsList} />

            <ExerciseHistory list={historyList} />
        </div>
    )   
}

/**
 * 운동 통계
 */
function ExerciseStatisticsContainer( { list } ) {

    return (
        <div>
            <ExerciseStatistics list={list} />
        </div>
    )
}

function ExerciseStatistics( { list } ) {
    return list.map(function(data) {
        <StatisticsCircle data={data} />
    })
}

function StatisticsCircle(data){
    return <div>
        TEST
    </div>
}

/**
 * 운동 이력
 */
 function ExerciseHistory( { list } ) {
    return (
        <table>
            <thead>
                <tr>
                    <th>일정</th>
                    <th>내용</th>
                </tr>
            </thead>

            <tbody>
                { list.map(function({ date }, key ){
                    return (
                        <tr key={key}>
                            <td>{ date }</td>
                            <td>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>

    )
}
