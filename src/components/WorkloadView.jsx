import {Tabs} from '@gravity-ui/uikit';
import {DropdownMenu} from '@gravity-ui/uikit';
import {Button} from '@gravity-ui/uikit';
import { GraphView } from './GraphView';
import { useState } from 'react';
import { ResultAlert } from './ResultAlert';
import {User} from '@gravity-ui/uikit';


const tabs = [
    {
        id: "tab_vk",
        title: "VK"
    }
]

const tab_to_graph = {
    tab_vk: {
        nodes: [
            {
                id: 'node1',
                label: '12442455',
                style: {
                    label: {
                        value: '12442455'
                    },
                    keyshape: {
                        fill: '#FFFF00',
                        stroke: '#CCCC00',
                        size: 60,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "cluster-element",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [
                        {
                            link: "https://m.vk.com/id342841693?z=photo342841693_457241797%252Fphotos342841693"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457244262%252Fphoto_feed347369371"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457242683%252Fphoto_feed347369371"
                        }
                    ],
                    recommendedGroups: [
                        {
                            name: "веские поводы бросить универ",
                            photoLink: "https://m.vk.com/dasviduli.univerr?z=photo-186726568_457239018%2Falbum-186726568&from=groups",
                            link: "https://m.vk.com/dasviduli.univerr?from=groups",
                            subscribersAmount: 134
                        },
                        {
                            name: "RedGryph ★Визуальные Новеллы★",
                            photoLink: "https://m.vk.com/redgryph_novels?z=photo-167919892_456239021%2Falbum-167919892&from=groups",
                            link: "https://m.vk.com/redgryph_novels?from=groups",
                            subscribersAmount: 18000
                        },
                        {
                            name: "Электрофорез",
                            photoLink: "https://m.vk.com/electroforez?z=photo-36661515_457241970%2Falbum-36661515&from=groups",
                            link: "https://m.vk.com/electroforez?from=groups",
                            subscribersAmount: 1299
                        }
                    ],
                    recommendedFriends: [
                        {
                            fio: "Войтенко Глеб",
                            photoLink: "https://m.vk.com/glebvoitenko?z=photo158501195_456239917%2Fphotos158501195&from=friends",
                            age: 22,
                            link: "https://m.vk.com/glebvoitenko?from=friends"
                        },
                        {
                            fio: "Чувашова Виктория",
                            photoLink: "https://m.vk.com/victoria_murr?z=photo126808067_457264692%2Fphotos126808067&from=friends",
                            age: 21,
                            link: "https://m.vk.com/victoria_murr"
                        },
                        {
                            fio: "Полежаева Юлия",
                            photoLink: "https://m.vk.com/pol_julie?z=photo347369371_457244262%2Fphotos347369371&from=friends",
                            age: 20,
                            link: "https://m.vk.com/pol_julie"
                        }
                    ]
                }
            },
            {
                id: 'node2',
                label: '12442454',
                style: {
                    label: {
                        value: '12442454'
                    },
                    keyshape: {
                        fill: '#FFFF00',
                        stroke: '#CCCC00',
                        size: 45,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "cluster-element",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [
                        {
                            link: "https://m.vk.com/id342841693?z=photo342841693_457241797%252Fphotos342841693"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457244262%252Fphoto_feed347369371"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457242683%252Fphoto_feed347369371"
                        }
                    ],
                    recommendedGroups: [
                        {
                            name: "веские поводы бросить универ",
                            photoLink: "https://m.vk.com/dasviduli.univerr?z=photo-186726568_457239018%2Falbum-186726568&from=groups",
                            link: "https://m.vk.com/dasviduli.univerr?from=groups",
                            subscribersAmount: 134
                        },
                        {
                            name: "RedGryph ★Визуальные Новеллы★",
                            photoLink: "https://m.vk.com/redgryph_novels?z=photo-167919892_456239021%2Falbum-167919892&from=groups",
                            link: "https://m.vk.com/redgryph_novels?from=groups",
                            subscribersAmount: 18000
                        },
                        {
                            name: "Электрофорез",
                            photoLink: "https://m.vk.com/electroforez?z=photo-36661515_457241970%2Falbum-36661515&from=groups",
                            link: "https://m.vk.com/electroforez?from=groups",
                            subscribersAmount: 1299
                        }
                    ],
                    recommendedFriends: [
                        {
                            fio: "Войтенко Глеб",
                            photoLink: "https://m.vk.com/glebvoitenko?z=photo158501195_456239917%2Fphotos158501195&from=friends",
                            age: 22,
                            link: "https://m.vk.com/glebvoitenko?from=friends"
                        },
                        {
                            fio: "Чувашова Виктория",
                            photoLink: "https://m.vk.com/victoria_murr?z=photo126808067_457264692%2Fphotos126808067&from=friends",
                            age: 21,
                            link: "https://m.vk.com/victoria_murr"
                        },
                        {
                            fio: "Полежаева Юлия",
                            photoLink: "https://m.vk.com/pol_julie?z=photo347369371_457244262%2Fphotos347369371&from=friends",
                            age: 20,
                            link: "https://m.vk.com/pol_julie"
                        }
                    ]
                }
            },
            {
                id: 'node3',
                label: '12442459',
                style: {
                    label: {
                        value: '12442459'
                    },
                    keyshape: {
                        fill: '#FFFF00',
                        stroke: '#CCCC00',
                        size: 30,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "cluster-element",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [
                        {
                            link: "https://m.vk.com/id342841693?z=photo342841693_457241797%252Fphotos342841693"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457244262%252Fphoto_feed347369371"
                        },
                        {
                            link: "https://m.vk.com/pol_julie?z=photo347369371_457242683%252Fphoto_feed347369371"
                        }
                    ],
                    recommendedGroups: [
                        {
                            name: "веские поводы бросить универ",
                            photoLink: "https://m.vk.com/dasviduli.univerr?z=photo-186726568_457239018%2Falbum-186726568&from=groups",
                            link: "https://m.vk.com/dasviduli.univerr?from=groups",
                            subscribersAmount: 134
                        },
                        {
                            name: "RedGryph ★Визуальные Новеллы★",
                            photoLink: "https://m.vk.com/redgryph_novels?z=photo-167919892_456239021%2Falbum-167919892&from=groups",
                            link: "https://m.vk.com/redgryph_novels?from=groups",
                            subscribersAmount: 18000
                        },
                        {
                            name: "Электрофорез",
                            photoLink: "https://m.vk.com/electroforez?z=photo-36661515_457241970%2Falbum-36661515&from=groups",
                            link: "https://m.vk.com/electroforez?from=groups",
                            subscribersAmount: 1299
                        }
                    ],
                    recommendedFriends: [
                        {
                            fio: "Войтенко Глеб",
                            photoLink: "https://m.vk.com/glebvoitenko?z=photo158501195_456239917%2Fphotos158501195&from=friends",
                            age: 22,
                            link: "https://m.vk.com/glebvoitenko?from=friends"
                        },
                        {
                            fio: "Чувашова Виктория",
                            photoLink: "https://m.vk.com/victoria_murr?z=photo126808067_457264692%2Fphotos126808067&from=friends",
                            age: 21,
                            link: "https://m.vk.com/victoria_murr"
                        },
                        {
                            fio: "Полежаева Юлия",
                            photoLink: "https://m.vk.com/pol_julie?z=photo347369371_457244262%2Fphotos347369371&from=friends",
                            age: 20,
                            link: "https://m.vk.com/pol_julie"
                        }
                    ]
                }
            },
            {
                id: 'node4',
                label: '12411155',
                style: {
                    label: {
                        value: '12411155'
                    },
                    keyshape: {
                        fill: '#8A2BE2',
                        stroke: '#663399',
                        size: 20,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "example-tag-1",
                        "example-tag-2"
                    ],
                }
                    
            },
            {
                id: 'node5',
                label: '12442434',
                style: {
                    label: {
                        value: '12442434'
                    },
                    keyshape: {
                        fill: '#00FF00',
                        stroke: '#006400',
                        size: 20,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "me",
                        "cluster-element",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [],
                    recommendedGroups: [],
                    recommendedFriends: []
                }
            },
            {
                id: 'node6',
                label: '12242455',
                style: {
                    label: {
                        value: '12242455'
                    },
                    keyshape: {
                        fill: '#8A2BE2',
                        stroke: '#663399',
                        size: 20,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "example-tag-1",
                        "example-tag-2"
                    ],
                }
            },
            {
                id: 'node7',
                label: '13332455',
                style: {
                    label: {
                        value: '13332455'
                    },
                    keyshape: {
                        fill: '#8A2BE2',
                        stroke: '#663399',
                        size: 20,
                    }
                },
                data: {
                    links: [
                        {
                            socialNet: 'VK',
                            link: "https://m.vk.com/milappv"
                        },
                        {
                            socialNet: 'Telegram',
                            link: "https://m.vk.com/id342841693"
                        }
                    ],
                    tags: [
                        "cluster-top-1",
                        "example-tag-1",
                        "example-tag-2"
                    ],
                }
            }
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node2',
                target: 'node3',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node3',
                target: 'node1',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node2',
                target: 'node5',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node1',
                target: 'node5',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node1',
                target: 'node4',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node5',
                target: 'node7',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            },
            {
                source: 'node2',
                target: 'node6',
                label: '',
                style: {
                    label: {
                        value: '',
                        fill: '#D3D3D3',
                    },
                    keyshape: {
                        stroke: '#D3D3D3',
                    },
                },
                data: {
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 1
                        },
                        {
                            paramName: 'groups-similarity',
                            paramVal: 0.6
                        },
                        {
                            paramName: 'img-similarity',
                            paramVal: 0.7
                        }
                    ]
                }
            }
        ],
        settings: [
            {
                settingName: 'Максимальная глубина анализа',
                settingValue: '6'
            },
            {
                settingName: 'Количество лидеров мнений кластера',
                settingValue: '3'
            },
            {
                settingName: 'Количество анализируемых связей на пользователя',
                settingValue: '10'
            },
            {
                settingName: 'Учитываемые параметры',
                settingValue: 'друзья, сообщества, изображения'
            }
        ],
    }
}

const tab_to_report_info = {
    tab_vk: {
        centralityDegree: [
            {
                nodeId: '123344397',
                value: 0.555
            },
            {
                nodeId: '148386847',
                value: 0.45
            },
            {
                nodeId: '120387463',
                value: 0.12
            }
        ],
        closenessCentrality: [
            {
                nodeId: '148386847',
                value: 0.821
            },
            {
                nodeId: '120387463',
                value: 0.764
            },
            {
                nodeId: '123344397',
                value: 0.325
            }
        ],
        betweenessCentrality: [
            {
                nodeId: '123344397',
                value: 0.902
            },
            {
                nodeId: '120387463',
                value: 0.442
            },
            {
                nodeId: '148386847',
                value: 0.195
            }
        ]
    }
}

export default function WorkloadView() {
    const [activeTab, setActiveTab] = useState('tab_vk');

    const [resultAlertOpen, setResultAlertOpen] = useState(false);
    const [resultAlertType, setResultAlertType] = useState('');
    const [resultAlertTitle, setResultAlertTitle] = useState('');
    const [resultAlertMessage, setResultAlertMessage] = useState('');

    return (
        <div className='container'>
            <div className='horizontal-container'>
                <Tabs
                    activeTab={activeTab} 
                    items={tabs}
                />
            </div>
           
            <div className='horizontal-container1'>
                <div className='graph'>
                    <GraphView 
                        data={tab_to_graph[activeTab]}
                        resultAlertOpen={resultAlertOpen}
                        setResultAlertOpen={setResultAlertOpen}
                        resultAlertType={resultAlertType}
                        setResultAlertType={setResultAlertType}
                        resultAlertTitle={resultAlertTitle}
                        setResultAlertTitle={setResultAlertTitle}
                        resultAlertMessage={resultAlertMessage}
                        setResultAlertMessage={setResultAlertMessage}
                        reportData={tab_to_report_info[activeTab]}
                    />
                </div>
                
            </div>
            <ResultAlert
                resultAlertOpen={resultAlertOpen}
                setResultAlertOpen={setResultAlertOpen}
                resultAlertType={resultAlertType}
                resultAlertTitle={resultAlertTitle}
                resultAlertMessage={resultAlertMessage}
            />
        </div>
    );
};