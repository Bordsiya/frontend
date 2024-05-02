import {Modal, Button} from '@gravity-ui/uikit';
import { useState } from 'react';
import { ColorPicker } from '@wellbees/color-picker-input'

export function ChangeSettingsModal({
     changeSettingsOpen, 
     setChangeSettingsModal,
     colorFillCluster,
     colorStrokeCluster,
     colorFillMe,
     colorStrokeMe,
     colorFillOther,
     colorStrokeOther,
     colorEdges,
     setColorFillCluster,
     setColorStrokeCluster,
     setColorFillMe,
     setColorStrokeMe,
     setColorFillOther,
     setColorStrokeOther,
     setColorEdges
    }) {

    const handleCloseModal = () => {
        setChangeSettingsModal(false);
    };

    return (
        <Modal open={changeSettingsOpen} onClose={handleCloseModal}>
            <div>
                Изменить стилевые настройки
            </div>
            <div>
                <div>
                    Цвет заливки вершин кластера:
                    <ColorPicker 
                        value={colorFillCluster}
                        inputType="input"
                        onChange={(color)=> setColorFillCluster(color)} 
                    />
                </div>
                <div>
                    Цвет границ вершин кластера:
                    <ColorPicker 
                        value={colorStrokeCluster}
                        inputType="input"
                        onChange={(color)=> setColorStrokeCluster(color)} 
                    />
                </div>
                <div>
                    Цвет заливки своей вершины:
                    <ColorPicker 
                        value={colorFillMe}
                        inputType="input"
                        onChange={(color)=> setColorFillMe(color)} 
                    />
                </div>
                <div>
                    Цвет границ своей вершины:
                    <ColorPicker 
                        value={colorStrokeMe}
                        inputType="input"
                        onChange={(color)=> setColorStrokeMe(color)} 
                    />
                </div>
                <div>
                    Цвет заливки остальных вершин:
                    <ColorPicker 
                        value={colorFillOther}
                        inputType="input"
                        onChange={(color)=> setColorFillOther(color)} 
                    />
                </div>
                <div>
                    Цвет границ остальных вершин:
                    <ColorPicker 
                        value={colorStrokeOther}
                        inputType="input"
                        onChange={(color)=> setColorStrokeOther(color)} 
                    />
                </div>
                <div>
                    Цвет связей:
                    <ColorPicker 
                        value={colorEdges}
                        inputType="input"
                        onChange={(color)=> setColorEdges(color)} 
                    />
                </div>
            </div>
        </Modal>
    );
}