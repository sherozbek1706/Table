import React, { Component, useEffect, useState } from 'react'

export default class TableBody extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Nazarov Abdullo Shodikulovich",
          phone: "(90)1945169",
          Monday: "16:30-19:00_1",
          Tuesday: " 07:00-09:00_2 ",
          Wednesday : "16:30-19:00_1",
          Thusday: "07:00-09:00_2",
          Friday: "16:30-19:00_1",
          Saturday: "07:00-09:00_2",
          Sunday: "",
          RoomNumber : 205,
        },
        {
          id: 2,
          name: "Utkirov Sarvar Utkirovich",
          phone: "(90)1020802",
          Monday: "16:00-18:00_1",
          Tuesday: "",
          Wednesday : "16:30-19:00_1",
          Thusday: "",
          Friday: "16:00-18:00_1 ",
          Saturday: "",
          Sunday: "",
          RoomNumber : 207,
        },
      ],
      
    };
    this.addItem = this.addItem.bind(this);
    this.maxId = 3;
  }

  ChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({user : data})
  //     })
      
  //     console.log(this.state.user);
  // }
  
  

  componentDidMount(){
    console.log(this.state.data);
  }

  addItem(){
    const newUser = {
      id: this.maxId++,
      name: "",
      phone: "",
      Monday: "",
      Tuesday: "",
      Wednesday : "",
      Thusday: "",
      Friday: "",
      Saturday: "",
      Sunday: "",
      RoomNumber : '',
    };


    this.setState(({data}) => {
      const newArr = [...data , newUser] ; 
      return{
        data: newArr
      }
    })
  }

  render(){
    return(
      <>
        {this.state.data.map((user) => (
          <tr key={user.id} >
            <td>{user.id}</td>
            <td>
              <input 
                type="text" 
                value={user.name}
                // onChange={(e) => {
                //   this.setState({[this.state.data.name] : e.target.value})
                // }} 
                onChange={(e) => {this.setState(e.target.value)}}
                name="name"
              />
            </td>
            <td>{user.phone}</td>
            <td>{user.Monday}</td>
            <td>{user.Tuesday}</td>
            <td>{user.Wednesday}</td>
            <td>{user.Thusday}</td>
            <td>{user.Friday}</td>
            <td>{user.Saturday}</td>
            <td>{user.Sunday}</td>
            <td>{user.RoomNumber}</td>
          </tr>
        ))}
        <button className='add' onClick={this.addItem} >Add User</button>



        {/* <tr>
          <td>2</td>
          <td><input disabled={false}  type="text" value={this.state.name} name="name" onChange={this.ChangeInput} /></td>
          <td>(90)1020802</td>
          <td>07:00-09:00_2 </td>
          <td></td>
          <td>07:00-09:00_2</td>
          <td></td>
          <td> 07:00-09:00_2 </td>
          <td>16:30-19:00_1</td>
          <td></td>
          <td>205</td>
        </tr>
        {this.state.user.map((item) => (
          <tr key={item.id} >
            <td>{item.id + 2}</td>
            <td><input type="text" value={item.name} name="name" onChange={this.ChangeInput} /></td>
            <td>{item.phone.slice(0 , 11)}</td>
            <td>{item.address.zipcode}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        ))} */}


      </>
    )
  }
}