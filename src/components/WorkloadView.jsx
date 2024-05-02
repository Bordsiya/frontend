import {Tabs} from '@gravity-ui/uikit';
import {DropdownMenu} from '@gravity-ui/uikit';
import {Button} from '@gravity-ui/uikit';
import { GraphView } from './GraphView';
import { useState } from 'react';
import { ResultAlert } from './ResultAlert';

const tabs = [
    {
        id: "tab_vk",
        title: "VK"
    },
    {
        id: "tab_telegram",
        title: "Telegram"
    },
    {
        id:"tab_vk_v_telegram",
        title:"VK v Telegram"
    },
]

const actions = [
    <Button view="normal" size="l">Анализ</Button>,
    <Button view="normal" size="l">Посмотреть отчет</Button>,
    <Button view="normal" size="l">Управление аккаунтом</Button>,
]

const tab_to_graph = {
    tab_vk: {
        nodes: [
            {
                id: 'node1',
                label: 'Узел 1',
                style: {
                    label: {
                        value: 'Узел 1'
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
                        "example-tag-1",
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
                label: 'Узел 2',
                style: {
                    label: {
                        value: 'Узел 2'
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
                        "example-tag-1",
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
                label: 'Узел 3',
                style: {
                    label: {
                        value: 'Узел 3'
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
                        "example-tag-1",
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
                label: 'Узел 4',
                style: {
                    label: {
                        value: 'Узел 4'
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
                id: 'node5',
                label: 'Узел 5',
                style: {
                    label: {
                        value: 'Узел 5'
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
                        "example-tag-1",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [],
                    recommendedGroups: [],
                    recommendedFriends: []
                }
            },
            {
                id: 'node6',
                label: 'Узел 6',
                style: {
                    label: {
                        value: 'Узел 6'
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
                id: 'node7',
                label: 'Узел 7',
                style: {
                    label: {
                        value: 'Узел 7'
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
            }
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
                label: '0.4',
                style: {
                    label: {
                        value: '0.4'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.5',
                style: {
                    label: {
                        value: '0.5'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.1',
                style: {
                    label: {
                        value: '0.1'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.1',
                style: {
                    label: {
                        value: '0.1'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.3',
                style: {
                    label: {
                        value: '0.3'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.7',
                style: {
                    label: {
                        value: '0.7'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.7',
                style: {
                    label: {
                        value: '0.7'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.2',
                style: {
                    label: {
                        value: '0.2'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                settingName: 'Количество анализируемых пользователей',
                settingValue: '100'
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
                settingName: 'Алгоритм выбора лидеров мнений',
                settingValue: 'Близость к центроиду'
            },
            {
                settingName: 'Учитываемые параметры',
                settingValue: 'друзья, сообщества, изображения'
            }
        ]
    },
    tab_telegram: {
        nodes: [
            {
                id: 'node1',
                label: 'Узел 1',
                style: {
                    label: {
                        value: 'Узел 1'
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
                        "example-tag-1",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [],
                    recommendedGroups: [],
                    recommendedFriends: []
                }
            }
        ],
        edges: [
            {
                source: 'node1',
                target: 'node1',
                label: '1',
                style: {
                    label: {
                        value: '1'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                settingName: 'Количество анализируемых пользователей',
                settingValue: '1000'
            },
            {
                settingName: 'Количество лидеров мнений кластера',
                settingValue: '2'
            },
            {
                settingName: 'Количество анализируемых связей на пользователя',
                settingValue: '15'
            },
            {
                settingName: 'Алгоритм выбора лидеров мнений',
                settingValue: 'Близость к центроиду'
            },
            {
                settingName: 'Учитываемые параметры',
                settingValue: 'друзья, сообщества'
            }
        ]
    },
    tab_vk_v_telegram: {
        nodes: [
            {
                id: 'node1',
                label: 'Узел 1',
                style: {
                    label: {
                        value: 'Узел 1'
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
                        "example-tag-1",
                        "example-tag-2"
                    ],
                    recommendedPhotos: [],
                    recommendedGroups: [],
                    recommendedFriends: []
                }
            },
            {
                id: 'node2',
                label: 'Узел 2',
                style: {
                    label: {
                        value: 'Узел 2'
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
                        "example-tag-1",
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
                label: 'Узел 3',
                style: {
                    label: {
                        value: 'Узел 3'
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
                        "example-tag-1",
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
                label: 'Узел 4',
                style: {
                    label: {
                        value: 'Узел 4'
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
                id: 'node5',
                label: 'Узел 5',
                style: {
                    label: {
                        value: 'Узел 5'
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
            }
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
                label: '0.1',
                style: {
                    label: {
                        value: '0.1'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.2',
                style: {
                    label: {
                        value: '0.2'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                label: '0.3',
                style: {
                    label: {
                        value: '0.3'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                source: 'node4',
                target: 'node5',
                label: '0.4',
                style: {
                    label: {
                        value: '0.4'
                    }
                },
                data: {
                    resHit: '0.6',
                    accountedHits: [
                        {
                            paramName: 'friends-similarity',
                            paramVal: 0.4
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
                settingName: 'Количество анализируемых пользователей',
                settingValue: '88'
            },
            {
                settingName: 'Количество лидеров мнений кластера',
                settingValue: '5'
            },
            {
                settingName: 'Количество анализируемых связей на пользователя',
                settingValue: '11'
            },
            {
                settingName: 'Алгоритм выбора лидеров мнений',
                settingValue: 'Близость к центроиду'
            },
            {
                settingName: 'Учитываемые параметры',
                settingValue: 'друзья, сообщества, изображения'
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

    const onChangeTab = tab => {
        setActiveTab(tab);
    };

    const tabs_menu = [
        {
            text: 'Добавить',
            items: [
                {
                    action: () => {
                        setResultAlertOpen(true);
                        setResultAlertType('success');
                        setResultAlertTitle('Успех');
                        setResultAlertMessage('Объединение завершено успешно');
                    },
                    text: 'Объединение',
    
                },
                {
                    action: () => {
                        setResultAlertOpen(true);
                        setResultAlertType('danger');
                        setResultAlertTitle('Ошибка');
                        setResultAlertMessage('Сравнение произошло с ошибкой: {data not found}');
                    },
                    text: 'Сравнение',
                },
            ],
        },
        {
            action: () => {
                setResultAlertOpen(true);
                setResultAlertType('success');
                setResultAlertTitle('Успех');
                setResultAlertMessage('Все успешно настроено');
            },
            text: 'Настройки',
        },
    ]

    return (
        <>
        <div>
            <div>
                
                <div>
                    <DropdownMenu
                        items={tabs_menu}
                    />
                </div>
                
                <div>
                    <Tabs
                        activeTab={activeTab} 
                        onSelectTab={onChangeTab}
                        items={tabs}
                    />
                </div>
                
            </div>
           
            <div>
                    <div>
                        <div>
                            {actions}
                        </div>
                    </div>
                    <div>
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
        
        </>
    );
};