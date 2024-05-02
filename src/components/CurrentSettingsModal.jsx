import {Card} from '@gravity-ui/uikit';

export function CurrentSettingsModal({ settingsOpen, settingsData }) {

    return (
        <div>
            { 
                settingsOpen && (
                    <Card view='raised'>
                        <div>
                            Настройки текущего графа
                        </div>
                        <div>
                            {
                                <>
                                    <ul>
                                        {
                                            settingsData.map((setting, index) => (
                                                <li key={index}>
                                                    {setting.settingName}: {setting.settingValue}
                                                </li>
                                            ))  
                                        }
                                    </ul>
                                </>
                            }
                        </div>
                    </Card>
                )
            }
        </div>
    );
}