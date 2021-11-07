import React, { Component } from 'react'
const Context = React.createContext();

export default class Data extends Component {
    state = {
        post:[
            {
                name: "Lê Anh Trường", 
                avatarImg: "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg", 
                date: "20/9/2021", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id accumsan lectus, nec ultricies libero. Proin finibus sagittis varius. Donec tempor id leo quis commodo. Nam hendrerit, augue nec maximus placerat, ligula dolor varius leo, sed sagittis justo ligula et justo. Proin congue neque ut ipsum dignissim pellentesque. ",
                img: "https://anhdephd.com/wp-content/uploads/2018/06/hinh-anh-4k-con-duong-va-hang-cay.jpg",
                sumLike: 20, 
                sumCmt: 10,
            },
            {
                name: "Lê Văn Tèo", 
                avatarImg: "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg", 
                date: "1/4/2021", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id accumsan lectus, nec ultricies libero. Proin finibus sagittis varius. Donec tempor id leo quis commodo. Nam hendrerit, augue nec maximus placerat, ligula dolor varius leo, sed sagittis justo ligula et justo. Proin congue neque ut ipsum dignissim pellentesque. ",
                img: "https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg", 
                sumLike: 9, 
                sumCmt: 3,
            },
            {
                name: "Nguyễn Tím", 
                avatarImg: "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg", 
                date: "13/6/2020", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id accumsan lectus, nec ultricies libero. Proin finibus sagittis varius. Donec tempor id leo quis commodo. Nam hendrerit, augue nec maximus placerat, ligula dolor varius leo, sed sagittis justo ligula et justo. Proin congue neque ut ipsum dignissim pellentesque. ",
                img: "https://i.ytimg.com/vi/YYG2TuqoTyo/maxresdefault.jpg", 
                sumLike: 12, 
                sumCmt: 9,
            },
            {
                name: "Luis Vui Tươi", 
                avatarImg: "https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg", 
                date: "21/2/2020", 
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id accumsan lectus, nec ultricies libero. Proin finibus sagittis varius. Donec tempor id leo quis commodo. Nam hendrerit, augue nec maximus placerat, ligula dolor varius leo, sed sagittis justo ligula et justo. Proin congue neque ut ipsum dignissim pellentesque. ",
                img: "https://i.pinimg.com/originals/3d/c4/49/3dc449b04d9ace524a0ecd247e1fdc83.png", 
                sumLike: 7, 
                sumCmt: 2,
            }
        ]
    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;