import {Modal, Button, Text} from '@gravity-ui/uikit';
import {CircleInfo} from '@gravity-ui/icons';

export function ViewReportModal({
    viewReportOpen, 
    setViewReportOpen,
    data,
    graphData,
    setResultAlertOpen, 
    setResultAlertType,
    setResultAlertTitle,
    setResultAlertMessage
} ) {
    const handleCloseModal = () => {
        setViewReportOpen(false);
    };

    return (
        <Modal open={viewReportOpen} onClose={handleCloseModal}>
            <div className='modal'>
                <div>
                <Text variant="subheader-2">Отчет</Text>
            </div>
            <div className='modal-content'>
                <div>
                    <Text variant="subheader-1">Рекомендуемые друзья: <CircleInfo/></Text>
                    <ul>
                        <li>
                            Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                            Источник рекомендации:
                            <ul>
                                <li> ID пользователя: 13847611</li>
                                <li> Имя пользователя: Глеб Войтенко</li>
                                <li> Коэффициент схожести: 0.793 </li>
                            </ul>
                        </li>
                        <li>
                            Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                            Источник рекомендации:
                            <ul>
                                <li> ID пользователя: 32557871</li>
                                <li> Имя пользователя: Юля Полежаева</li>
                                <li> Коэффициент схожести: 0.662 </li>
                            </ul>
                        </li>
                        <li>
                            Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                            Источник рекомендации:
                            <ul>
                                <li> ID пользователя: 16386975</li>
                                <li> Имя пользователя: Мила Попова</li>
                                <li> Коэффициент схожести: 0.646 </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <Text variant="subheader-1">Рекомендуемые фотографии: </Text><CircleInfo/>
                        <ul>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 13847611</li>
                                    <li> Имя пользователя: Глеб Войтенко</li>
                                    <li> Коэффициент схожести: 0.793 </li>
                                    <li> Тематики фотографий: airplanes, mountains, walking, bags, roads, <br></br> bridges,
                                        musical instruments, sculptures, birds, cats, dogs
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 32557871</li>
                                    <li> Имя пользователя: Юля Полежаева</li>
                                    <li> Коэффициент схожести: 0.662 </li>
                                    <li> Тематики фотографий: anime, art, culture, bags, roads, <br></br> bridges,
                                        musical instruments, sculptures, depression, cats, dogs</li>
                                </ul>
                            </li>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 16386975</li>
                                    <li> Имя пользователя: Мила Попова</li>
                                    <li> Коэффициент схожести: 0.646 </li>
                                    <li> Тематики фотографий: travelling, plants, walking, bags, business, <br></br>bridges,
                                        drums, sculptures, health, cats, love</li>
                                </ul>
                            </li>
                        </ul>
                </div>
                <div>
                    <Text variant="subheader-1">Рекомендуемые группы: </Text><CircleInfo/>
                        <ul>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 13847611</li>
                                    <li> Имя пользователя: Глеб Войтенко</li>
                                    <li> Коэффициент схожести: 0.793 </li>
                                    <li> Тематики групп: музыка, искусство, образование, наука, спорт, <br></br>
                                        игры, развлечения, путешествия, автомобили, здоровье, красота</li>
                                </ul>
                            </li>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 32557871</li>
                                    <li> Имя пользователя: Юля Полежаева</li>
                                    <li> Коэффициент схожести: 0.662 </li>
                                    <li> Тематики групп: музыка, искусство, благотворительность, <br></br>коллекционирование, спорт, 
                                        игры, развлечения, анимации, <br></br>вязание, здоровье, красота</li>
                                </ul>
                            </li>
                            <li>
                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                Источник рекомендации:
                                <ul>
                                    <li> ID пользователя: 16386975</li>
                                    <li> Имя пользователя: Мила Попова</li>
                                    <li> Коэффициент схожести: 0.646 </li>
                                    <li> Тематики групп: музыка, программирование, образование, <br></br>косметика, рукоделие, 
                                        игры, мода, рыбалка, интернет-маркетинг, <br></br>здоровье, уход за собой</li>
                                </ul>
                            </li>
                        </ul>
                        
                </div>
                {
                    data && data.centralityDegree && Array.isArray(data.centralityDegree) 
                        && data.centralityDegree.length !== 0 &&
                    (
                        <>
                            <hr></hr>
                            <Text variant="subheader-1">Центральность по степени: </Text><CircleInfo/>
                            <ul>
                                {
                                    data.centralityDegree.map((degree, index) => {
                                        return (
                                            <li key={index}>
                                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                                ID пользователя: {degree.nodeId} <br></br>
                                                Коэффициент схожести: {degree.value}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </>
                    )
                }
                {
                    data && data.closenessCentrality && Array.isArray(data.closenessCentrality) 
                        && data.closenessCentrality.length !== 0 &&
                    (
                        <>
                            <Text variant="subheader-1">Центральность по близости: </Text><CircleInfo/>
                            <ul>
                                {
                                    data.closenessCentrality.map((closeness, index) => {
                                        return (
                                            <li key={index}>
                                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                                ID пользователя: {closeness.nodeId} <br></br>
                                                Коэффициент схожести: {closeness.value}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </>
                    )
                }
                {
                    data && data.betweenessCentrality && Array.isArray(data.betweenessCentrality) 
                        && data.betweenessCentrality.length !== 0 &&
                    (
                        <>
                            <Text variant="subheader-1">Центральность по посредничеству: </Text><CircleInfo/>
                            <ul>
                                {
                                    data.betweenessCentrality.map((betweeness, index) => {
                                        return (
                                            <li key={index}>
                                                Ссылка: <a href="https://m.vk.com/glebvoitenko">ссылка</a> <br></br>
                                                ID пользователя: {betweeness.nodeId} <br></br>
                                                Коэффициент схожести: {betweeness.value}
                                            </li>
                                        );
                                    } )
                                }
                            </ul>
                        </>
                    )
                }
            </div>
            </div>
           
        </Modal>
    );
}