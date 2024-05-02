import {Card} from '@gravity-ui/uikit';

export function GraphModal({ open, id, label, data, source, target }) {

    console.log('data: ', data);
    return (
        <div>
            {open && (source === undefined || target === undefined) && (
                <Card view='raised'>
                    <div>
                        ID: {id}
                    </div>
                    <div>
                        Label: {label}
                    </div>
                    <div>
                        {
                            data && data.links && (
                                <>
                                    <span>Ссылки на аккаунт:</span>
                                    <ul>
                                        {
                                           data.links.map((link, index) => (
                                            <li key={index}>
                                                <a href={link.link} target="_blank">{link.socialNet}</a>
                                            </li>
                                        )) 
                                        }
                                    </ul>
                                </>
                            )
                        }
                        {
                            data && data.tags && Array.isArray(data.tags) 
                                && data.tags.length !== 0 && 
                            (
                                <>
                                    <span>Метки:</span>
                                    <ul>
                                        {
                                           data.tags.map((tag, index) => (
                                                <li key={index}>
                                                {tag}
                                                </li>
                                            )) 
                                        }
                                    </ul>
                                </>
                            )
                        }
                        {
                           data && data.recommendedPhotos && Array.isArray(data.recommendedPhotos) 
                            && data.recommendedPhotos.length !== 0 &&
                            (
                            <>
                                <span>Рекомендации по фотографиям:</span>
                                <ul>
                                    {
                                        data.recommendedPhotos.map((photo, index) => (
                                            <li key={index}>
                                                <a href={photo.link} target="_blank">Ссылка {index}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </>
                           )
                        }
                        {
                            data && data.recommendedGroups && Array.isArray(data.recommendedGroups) 
                                && data.recommendedGroups.length !== 0 &&
                            (
                                <>
                                    <span>Рекомендации по группам:</span>
                                    <ul>
                                        {
                                            data.recommendedGroups.map((group, index) => (
                                                <li key={index}>
                                                {group.name}
                                                {group.photoLink}
                                                {group.link}
                                                {group.subscribersAmount}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            )
                        }
                        {
                            data && data.recommendedFriends && Array.isArray(data.recommendedFriends) 
                                && data.recommendedFriends.length !== 0 && 
                            (
                                <>
                                    <span>Рекомендации по друзьям:</span>
                                    <ul>
                                        {
                                            data.recommendedFriends.map((friend, index) => (
                                                <li key={index}>
                                                    {friend.fio}
                                                    {friend.photoLink}
                                                    {friend.age}
                                                    {friend.link}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </>
                            )
                        }
                    </div>
                </Card>
            )}
            {
                open && source !== undefined && target !== undefined && (
                    <Card view='raised'>
                        <div>
                            ID: {id}
                        </div>
                        <div>
                            Source: {source}
                            Target: {target}
                        </div>
                        <div>
                            {
                                data && data.resHit && (
                                    <span>
                                        Результирующее сходство: {data.resHit}
                                    </span>
                                )
                            }
                            {
                                data && data.accountedHits && (
                                <>
                                    <span>Сходства по параметрам:</span>
                                    <ul>
                                        {data.accountedHits.map((param, index) => (
                                            <li key={index}>
                                                {param.paramName}: {param.paramVal}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </Card>
                )
            }
        </div>
        
    );
};