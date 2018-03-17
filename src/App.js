import React, { Component } from 'react';
import {Map,is} from 'immutable'
let obj = Map({
  'name': 'mark',
  'course': Map({'name': 'react+redux'})
})
let obj1 = obj.set('name','wang')
console.log(obj === obj1);
let obj2 = Map({name:1, title: 'mark'})
let obj3 = Map({name:1, title: 'mark'})
console.log(obj2 == obj3)
console.log(is(obj2,obj3))
// immutable 优点
// 1.减少内存使用
// 2.并发安全
// 3.降级项目复杂度
// 4.便于比较复杂数据 定制shouldComponentUpdate方便
// 5.时间旅行功能方便
// 6.函数是编程
//缺点
// 1. 学习成本
// 2. 库本身较大
// 3. 对先有项目入侵太严重
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: Map({'num':0})
    }
    this.handleClick = this.handleClick.bind(this)
    // this.handleTitle = this.handleTitle.bind(this)
  }
  handleClick(){
    this.setState({data:this.state.data.update('num',v=> v+1)})
  }
  handleTitle(){
    // this.setState({
    //   title:this.state.title+"!"
    // })
  }
  render() {
    const {data} = this.state
    console.log(data.get('num'))
    return (
      <div>
        <h2>App,{this.state.num}</h2>
        <button
          onClick={this.handleClick}
        >btnNum</button>
        <button
          onClick={this.handleTitle}
        >btnTitle</button>
        <Demo title={data.get('num')}></Demo>
      </div>
    );
  }
}
class Demo extends React.Component{
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(nextProps)
    console.log(this.props)
    console.log(is(nextProps,this.props))
    return !is(nextProps,this.props)
  }
  render() {
    return (
      <div>
        i am demo,{this.props.title}
      </div>
    );
  }
}
export default App;
