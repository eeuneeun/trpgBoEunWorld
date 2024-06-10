import * as React from 'react';


// # 유저의 기본 상태 결정을 위한 판단 기준
export interface IDefaultStatus {
    hp : number // 체력
    mp : number // 마력
    power : number // 힘
    intellect : number // 지력
    quickness : number // 순발력
    judgment : number // 판단력
    affinity : number // 친화력
}
   

// # 유저에게 비공개되지만 내부적으로 판단되는 기준 
export interface IInternalStatus {
    cruelty: number // 잔인함
    guilty : number // 죄책감
}
type DefaultStatuss = {
    gameId : string
    status : IDefaultStatus
}


export default function DefaultStatus (props: DefaultStatuss) {
  return (
    <ul>
        <li>{props.status.hp}</li>
        <li>{props.status.mp}</li>
        <li>{props.status.power}</li>
        <li>{props.status.intellect}</li>
        <li>{props.status.quickness}</li>
        <li>{props.status.judgment}</li>
        <li>{props.status.affinity}</li>
    </ul>
  );
}
