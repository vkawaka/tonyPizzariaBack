var categorias = {
    categorias: [
        {id: 1, nome: 'Pizzas', descricao: 'Todas as pizzas', foto: './logo.png'},
        {id: 2, nome: 'Bebidas', descricao: 'Todas as bebidas', foto: './bebidas.png'},
        {id: 3, nome: 'Vegetarianas', descricao: 'Pizzas veganas', foto: './melancia.png'},
        {id: 4, nome: 'Pizzas Salgadas', descricao: 'Todas as pizzas salgadas', foto: './pizza-logo.png'},
        {id: 5, nome: 'Pizzas Doces', descricao: 'Todas as pizzas doces', foto: './sorteve.png'},
        {id: 6, nome: 'Sobremesas', descricao: 'Sobremesas', foto: './sorvete-fofo.png'},

    ],
}
var produtosJSON = {
    pizzas: [
        {
            id: 1,
            nome: 'Pizza de peperoni com queijo.',
            preco: '19.00',
            foto: './pizza1.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: true,
            avaliacao: 5,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './maria.png',
                        nome: 'Maria da Silva',
                    },
                    data: '15/03/2022',
                    avl_comen: 3,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                },
                {
                    usuario: {
                        foto_usuario: './pedro.png',
                        nome: 'Pedro Gomes Dias',
                    },
                    data: '21/05/2022',
                    avl_comen: 5,
                    titulo: 'Essa pizza é demais, recomendo.',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
                }
            ]
        },
        {
            id: 2,
            nome: 'Pizza de calabresa com queijo.',
            preco: '16.00',
            foto: './pizza2.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: true,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './soobin.png',
                        nome: 'Soobin Choi',
                    },
                    data: '05/12/2022',
                    avl_comen: 4,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 3,
            nome: 'Pizza de frango com catupiry.',
            preco: '17.00',
            foto: './pizza3.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: true,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './beomgyu.png',
                        nome: 'Beomgyu Choi',
                    },
                    data: '13/03/2023',
                    avl_comen: 5,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 4,
            nome: 'Pizza de peperoni com queijo e tomate.',
            preco: '16.00',
            foto: './pizza4.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: false,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './yeonjun.png',
                        nome: 'Yeonjun Choi',
                    },
                    data: '13/09/2023',
                    avl_comen: 3,
                    titulo: 'Queijo frio.',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 5,
            nome: 'Pizza brotinho com queijo e tomate.',
            preco: '12.00',
            foto: './pizza5.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: true,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './taehyun.png',
                        nome: 'Taehyun Kang',
                    },
                    data: '05/02/2022',
                    avl_comen: 4,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 6,
            nome: 'Pizza de abobrinha com brie',
            preco: '30.00',
            foto: './pizza6.png',
            descricao: 'Queijo Brie, Abrobrinha grelhada no azeite, alho in natura e parmesão para gratinar.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 3, cat: categorias[2]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: false,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './kai.png',
                        nome: 'Kai Huening Kamal',
                    },
                    data: '14/08/2022',
                    avl_comen: 4,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 7,
            nome: 'oriental',
            preco: '30.00',
            foto: './pizza7.png',
            descricao: 'muzzarela, alho poró, shimeji e sjitake refogado no shoyo, cream cheese, cubos de cebola.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 3, cat: categorias[2]},
                {idCat: 4, cat: categorias[3]}
            ],
            favorito: true,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './taehyun.png',
                        nome: 'Taehyun Kang',
                    },
                    data: '05/02/2022',
                    avl_comen: 4,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        },
        {
            id: 8,
            nome: 'Pizza chocolate com morango',
            preco: '12.00',
            foto: './pizza8.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 1, cat: categorias[0]},
                {idCat: 5, cat: categorias[4]},
                {idCat: 6, cat: categorias[5]}
            ],
            favorito: false,
            avaliacao: 4,
            comentarios: [
                {
                    usuario: {
                        foto_usuario: './taehyun.png',
                        nome: 'Taehyun Kang',
                    },
                    data: '05/02/2022',
                    avl_comen: 4,
                    titulo: 'Pizza muito boa!',
                    coment_inteiro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.'
                }
            ]
        }
    ],
    bebidas:[
        {
            id: 1,
            nome: 'coca-cola 2L',
            preco: '16.99',
            foto: './cocacola.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 2, cat: categorias[1]}
            ],
            favorito: false,
            avaliacao: 4
        },
        {
            id: 2,
            nome: 'cerveja heineken',
            preco: '17.99',
            foto: './heineken.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 2, cat: categorias[1]}
            ],
            favorito: false,
            avaliacao: 4
        },
        {
            id: 3,
            nome: 'guaraná 2L',
            preco: '14.99',
            foto: './guarana.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 2, cat: categorias[1]}
            ],
            favorito: false,
            avaliacao: 4
        },
        {
            id: 4,
            nome: 'itubaína',
            preco: '13.99',
            foto: './itubaina.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 2, cat: categorias[1]}
            ],
            favorito: true,
            avaliacao: 5
        }
    ],
    doces:[
        {
            id: 1,
            nome: 'chessecake',
            preco: '28.99',
            foto: './cheesecake.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 6, cat: categorias[5]}
            ],
            favorito: false,
            avaliacao: 5
        },
        {
            id: 2,
            nome: 'pudim',
            preco: '22.50',
            foto: './pudim.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 6, cat: categorias[5]}
            ],
            favorito: true,
            avaliacao: 5
        },
        {
            id: 3,
            nome: 'mousse de limão',
            preco: '19.80',
            foto: './mousse.png',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            categoria: [
                {idCat: 6, cat: categorias[5]}
            ],
            favorito: false,
            avaliacao: 4
        }
    ]
}

var usuarioJSON = {
    usuario: [
        {
            id: 1,
            nome: 'Fulano da Silva',
            email: 'fulano.silva@email.com.br',
            senha: 'senhaQualquer',
            telefone: 11955555555,
            foto: './fulano.png',
            localizacao: [
                {
                    rua: 'Rua Perto de Algum Lugar',
                    cidade: 'Moripora',
                    numero: '13',
                    bairro: 'Jardim Xurupita',
                    estado: 'RJ',
                    país: 'Brasil',
                    cep: 7798000,
                    complemento: undefined
                }
            ]
        },
        {
            id: 2,
            nome: 'Choso Kamo',
            email: 'bbchoso@email.com.br',
            senha: 'lolol@l',
            telefone: 118984263,
            foto: './choso.png',
            localizacao: [
                {
                    rua: 'Rua Kenjaku',
                    cidade: 'Womb',
                    numero: '9',
                    bairro: 'Liberdade',
                    estado: 'SP',
                    país: 'Brasil',
                    cep: 35974080,
                    complemento: undefined
                }
            ]
        },
        {
            id: 3,
            nome: 'Soobin Choi',
            email: 'soobinlindao@email.com.br',
            senha: '04032019',
            telefone: 118984264,
            foto: './soobin.png',
            localizacao: [
                {
                    rua: 'Av Antonio Bardella',
                    cidade: 'Jandira',
                    numero: '13',
                    bairro: 'Jd. São Luiz',
                    estado: 'SP',
                    país: 'Brasil',
                    cep: 16618000,
                    complemento: "bloco K, apto 13"
                }
            ]
        }
    ]
}

module.exports={
    categorias,
    produtosJSON,
    usuarioJSON
}