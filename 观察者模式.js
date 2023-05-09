class Subject {
  constructor(name){
     this.name=name
     this.state="开心"
     this.observers=[]
  }
  attach(ther){
    this.observers.push(ther)
  }
  setState(state){
    this.state=state
    this.observers.forEach(item=>item.updated(this))
  }
}
class Observer{
  constructor(name){
    this.name=name
  }
  updated(subject) {
    console.log(this.name+":"+subject.name+'当前状态是：'+subject.state);
  }
}
const subject =new Subject("小宝宝")
const father=new Observer("爸爸")
const mather=new Observer("妈妈")
subject.attach(father)
subject.attach(mather)
subject.setState("不开心")
subject.setState("非常开心")