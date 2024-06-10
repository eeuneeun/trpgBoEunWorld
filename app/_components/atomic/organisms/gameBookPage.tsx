import * as React from 'react';

export interface ICommonPageProps {
    contents : React.ReactElement
}

// # 책장 한 장
// @ contents : 게임 진행내용을 내용을 포함
export default function CommonPage (props: ICommonPageProps) {
  return (
      <div className="demoPage">{props.contents}</div>
  );
}
