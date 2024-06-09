import {Modal,Button, Text} from '@gravity-ui/uikit';
import { useState } from 'react';
import {Checkbox} from '@gravity-ui/uikit';
import {TextInput} from '@gravity-ui/uikit';

export function AnalyseGraphModal({
    analyseOpen, 
    setAnalyseOpen,
    setResultAlertOpen, 
    setResultAlertType,
    setResultAlertTitle,
    setResultAlertMessage
} ) {

    const minMaxDepth = 1;
    const maxMaxDepth = 10;
    const minAmountOfLeaders = 1;
    const maxAmountOfLeaders = 10;
    const minAmountOfRelationsPerUser = 1;
    const maxAmountOfRelationsPerUser = 50;

    const emptyCentralityMeasureError = "Не выбрано ни одной меры центральности";
    const emptyParametersError = "Не выбрано достаточно параметров";

    const [maxDepth, setMaxDepth] = useState(3);
    const [amountOfLeaders, setAmountOfLeaders] = useState(5);
    const [amountOfRelationsPerUser, setAmountOfRelationsPerUser] = useState(10);
    const [centralityMeasure, setCentralityMeasure] = useState([]);
    const [parameters, setParameters] = useState(['friends']);

    const [errorCentralityMeasure, setErrorCentralityMeasure] = useState('');
    const [errorParameters, setErrorParameters] = useState('');

    const handleCheckboxChangeCentralityMeasure = (evt) => {
        const { value, checked } = evt.target;
        if (checked) {
            setCentralityMeasure(prev => [...prev, value]);
        } else {
            setCentralityMeasure(prev => prev.filter(item => item !== value));
        }
    };

    const handleCheckboxChangeParameters = (evt) => {
        const { value, checked } = evt.target;
        if (checked) {
            setParameters(prev => [...prev, value]);
        } else {
            setParameters(prev => prev.filter(item => item !== value));
        }
    };

    const handleCloseModal = () => {
        setMaxDepth(3);
        setAmountOfLeaders(5);
        setAmountOfRelationsPerUser(10);
        setCentralityMeasure([]);
        setParameters(['friends']);
        setErrorCentralityMeasure('');
        setErrorParameters('');
        setAnalyseOpen(false);
    };

    const submitData = () => {
        setErrorParameters('');
        setErrorCentralityMeasure('');
        if (parameters.length === 1) {
            setErrorParameters(emptyParametersError);
        }
        if (parameters.length !== 1) {
            console.log('centralities: ', centralityMeasure);
            console.log('parameters: ', parameters);
            handleCloseModal();
            setResultAlertOpen(true);
            setResultAlertType('success');
            setResultAlertTitle('Успех');
            setResultAlertMessage('Анализ завершен');
        }
    }

    return (
        <Modal open={analyseOpen} onClose={handleCloseModal}>
            <div className='modal'>
                <div>
                <Text variant="subheader-2">Настройки анализа</Text>
            </div>
            <div className='modal-content'>
                <div>
                    Максимальная глубина анализа:
                    <NumberInput
                        value={maxDepth}
                        onUpdate={(newDepth) => setMaxDepth(newDepth)}
                        min={minMaxDepth}
                        max={maxMaxDepth}
                    />
                </div>
                <div>
                    Количество лидеров мнений кластера:
                    <NumberInput
                        value={amountOfLeaders} 
                        onUpdate={(newLeaders) => setAmountOfLeaders(newLeaders)}
                        min={minAmountOfLeaders}
                        max={maxAmountOfLeaders}
                    />
                </div>
                <div>
                    Количество анализируемых связей на пользователя:
                    <NumberInput 
                        value={amountOfRelationsPerUser} 
                        onUpdate={(newRelations) => setAmountOfRelationsPerUser(newRelations)} 
                        min={minAmountOfRelationsPerUser}
                        max={maxAmountOfRelationsPerUser}
                    />
                </div>
                <div>
                    Анализируемые меры центральности:
                    <ul>
                        <li style={{ listStyleType: 'none' }}>
                          <Checkbox 
                            content="Центральность по степени" 
                            value="centralityDegree"
                            onChange={handleCheckboxChangeCentralityMeasure}
                          />  
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <Checkbox 
                                content="Центральность по близости" 
                                value="closenessCentrality"
                                onChange={handleCheckboxChangeCentralityMeasure}
                            />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <Checkbox 
                                content="Центральность по посредничеству" 
                                value="betweenessCentrality"
                                onChange={handleCheckboxChangeCentralityMeasure}
                            />
                        </li>
                    </ul>
                    { errorCentralityMeasure.length !== 0 && (
                            <div>
                                <Text variant="caption-2" color="danger">{errorCentralityMeasure}</Text>
                                </div>
                        )
                    }
                </div>
                <div>
                    Учитываемые параметры:
                    <ul>
                        <li style={{ listStyleType: 'none' }}>
                            <Checkbox 
                                content="Друзья" 
                                value="friends"
                                checked={true}
                                disabled={true}
                                onChange={handleCheckboxChangeParameters}
                            />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                            <Checkbox 
                                content="Сообщества" 
                                value="groups"
                                onChange={handleCheckboxChangeParameters}
                            />
                        </li>
                        <li style={{ listStyleType: 'none' }}>
                           <Checkbox 
                                content="Фотографии" 
                                value="photos"
                                onChange={handleCheckboxChangeParameters}
                            /> 
                        </li>
                    </ul>
                    { errorParameters.length !== 0 && (
                            <div>
                                <Text variant="caption-2" color="danger">{errorParameters}</Text></div>
                        )
                    }
                </div>
                <div className='button'>
                    <Button view="outlined" onClick={submitData}>Проанализировать</Button>
                </div>
            </div>
            </div>
            
        </Modal>
    );
}

function NumberInput({ value, onUpdate, min, max }) {
    const handleKeyPress = (event) => {
        // Разрешить только ввод цифр
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      };
    
      const handleUpdate = (val) => {
        // Позволяем временно пустую строку для удобства редактирования
        if (val === '') {
          onUpdate('');
          return;
        }
    
        if (!val.match(/^\d+$/)) { // Если введено не только число
          return; // Тогда не обновляем состояние
        }
    
        onUpdate(val); // Обновляем значение без ограничений минимум/максимум
    };
    
    const handleBlur = () => {
        let numericValue = parseInt(value, 10) || 0; // Обережно обрабатываем пустую строку и не число
        if (numericValue < min) {
          onUpdate(min.toString());
        } else if (numericValue > max) {
          onUpdate(max.toString());
        }
    };
  
    return (
      <TextInput
        type="number"
        value={value}
        onUpdate={handleUpdate}
        onKeyPress={handleKeyPress}
        onBlur={handleBlur}
      />
    );
  }