import Graphin, { GraphinContext } from '@antv/graphin';
import { MiniMap } from '@antv/graphin-components';
import { useContext, useEffect, useState } from 'react';
import { GraphModal } from './GraphModal';
import {CirclesConcentric} from '@gravity-ui/icons';
import {Button} from '@gravity-ui/uikit';
import {ArrowRotateRight} from '@gravity-ui/icons';
import {ChevronsDownWide} from '@gravity-ui/icons';
import { CurrentSettingsModal } from './CurrentSettingsModal';
import {Gear} from '@gravity-ui/icons';
import { ChangeSettingsModal } from './ChangeSettingsModal';


let currModal = null;
const SampleBehavior = ({ 
        data, 
        open, 
        setOpen,
        setNodeModalId,
        setNodeModalLabel,
        setNodeModalData,
        setEdgeModalSouce,
        setEdgeModalTarget,
        centerMe,
        setCenterMe,
        colorFillCluster,
        colorStrokeCluster,
        colorFillMe,
        colorStrokeMe,
        colorFillOther,
        colorStrokeOther,
        colorEdges,
    }
) => {
    const {graph, apis} = useContext(GraphinContext);
    useEffect(() => {
        if (!graph) {
            return;
        }

        if (centerMe) {
            apis.focusNodeById('node1');
            let meNode = graph.findById('node1');
            graph.setItemState(meNode, 'selected', false);
            setCenterMe(false);
        }

        if (colorFillCluster) {
            console.log('colorFillCluster');
        }
        if (colorStrokeCluster) {
            console.log('colorStrokeCluster');
        }
        if (colorFillMe) {
            console.log('colorFillMe');
        }
        if (colorStrokeMe) {
            console.log('colorStrokeMe');
        }
        if (colorFillOther) {
            console.log('colorFillOther');
        }
        if (colorStrokeOther) {
            console.log('colorStrokeOther');
        }
        if (colorEdges) {
            console.log('colorEdges');
        }

        const handleCenter = (evt) => {
            console.log('Center Clicked');
            setOpen(false);
            currModal = null;
            graph.fitCenter();
        };

        const openCloseModalInfo = (evt) => {
            const { item } = evt;
            if (item === null) {
                console.log('item is null');
                currModal = null;
                setOpen(false);
                return;
            }
            const model = item.getModel();

            const id = model.id;
            const label = model.label;
            const data = model.data;
            const source = model.source;
            const target = model.target;

            console.log('Node ID:', id);
            console.log('Node Label:', label);
            console.log('Edge source:', source);
            console.log('Edge target:', target);
            console.log('Node Data:', data);

            if (open) {
                if (currModal == id) {
                    setOpen(false);
                    currModal = null;
                } else {
                    currModal = id;
                    setNodeModalId(id);
                    setNodeModalLabel(label);
                    setNodeModalData(data);
                    setEdgeModalSouce(source);
                    setEdgeModalTarget(target);
                    graph.setItemState(item, 'selected', true);
                    return;
                }
            } else {
                setNodeModalId(id);
                setNodeModalLabel(label);
                setNodeModalData(data);
                setEdgeModalSouce(source);
                setEdgeModalTarget(target);
                setOpen(true);
                currModal = id;
            }

            console.log(open);
            if (source !== undefined && target !== undefined) {
                if (!open) {
                    graph.setItemState(item, 'selected', true)
                } else {
                    graph.setItemState(item, 'selected', false)
                }
            }
        }

        graph.on('canvas:dblclick', handleCenter);
        graph.on('afterrender', handleCenter);
        graph.on('aftergraphrefreshposition', handleCenter);
        
        graph.on('node:click', openCloseModalInfo);
        graph.on('edge:click', openCloseModalInfo);
        graph.on('canvas:click', openCloseModalInfo);

        return () => {
            graph.off('canvas:dblclick', handleCenter);
            graph.off('afterrender', handleCenter);
            graph.off('aftergraphrefreshposition', handleCenter);

            graph.off('node:click', openCloseModalInfo);
            graph.off('edge:click', openCloseModalInfo);
            graph.off('canvas:click', openCloseModalInfo);
        };
    }, [graph, data, open, setOpen, centerMe,
        colorFillCluster,
        colorStrokeCluster,
        colorFillMe,
        colorStrokeMe,
        colorFillOther,
        colorStrokeOther,
        colorEdges]);

    return null;
  };

export function GraphView({ 
    data, 
    resultAlertOpen, 
    setResultAlertOpen, 
    resultAlertType,
    setResultAlertType,
    resultAlertTitle, 
    setResultAlertTitle,
    resultAlertMessage,
    setResultAlertMessage,
}) {
    const [open, setOpen] = useState(false);

    const [nodeModalId, setNodeModalId] = useState(0);
    const [nodeModalLabel, setNodeModalLabel] = useState('');
    const [edgeModalSource, setEdgeModalSouce] = useState(null);
    const [edgeModalTarget, setEdgeModalTarget] = useState(null);
    const [nodeModalData, setNodeModalData] = useState({});
    const [centerMe, setCenterMe] = useState(false);

    const [settingsOpen, setSettingsOpen] = useState(false);

    const [changeSettingsModal, setChangeSettingsModal] = useState(false);

    const [colorFillCluster, setColorFillCluster] = useState("#aabbcc");
    const [colorStrokeCluster, setColorStrokeCluster] = useState("#aabbcc");
    const [colorFillMe, setColorFillMe] = useState("#aabbcc");
    const [colorStrokeMe, setColorStrokeMe] = useState("#aabbcc");
    const [colorFillOther, setColorFillOther] = useState("#aabbcc");
    const [colorStrokeOther, setColorStrokeOther] = useState("#aabbcc");
    const [colorEdges, setColorEdges] = useState("#aabbcc");

    const handleCenterMe = () => {
        console.log('center me');
        setCenterMe(true);
    }

    const handleSettingsOpen = () => {
        if (settingsOpen) {
            setSettingsOpen(false);
        } else {
            setSettingsOpen(true);
        }
    }

    const handleChangeSettingsOpen = () => {
        if (changeSettingsModal) {
            setChangeSettingsModal(false);
        } else {
            setChangeSettingsModal(true);
        }
    }

    const handleUpdateGraph = () => {
        setResultAlertOpen(true);
        setResultAlertType('success');
        setResultAlertTitle('Успех');
        setResultAlertMessage('Обновление завершено успешно');
    }
    
    return (
        <div style={{ width: '800px', height: '600px' }}>
            <Graphin data={data}>
                <MiniMap visible options={{ size: [100, 100] }} />
                <SampleBehavior
                    data={data}
                    open={open}
                    setOpen={setOpen}
                    setNodeModalId={setNodeModalId}
                    setNodeModalLabel={setNodeModalLabel}
                    setNodeModalData={setNodeModalData}
                    setEdgeModalSouce={setEdgeModalSouce}
                    setEdgeModalTarget={setEdgeModalTarget}
                    centerMe={centerMe}
                    setCenterMe={setCenterMe}
                    colorFillCluster={colorFillCluster}
                    colorStrokeCluster={colorStrokeCluster}
                    colorFillMe={colorFillMe}
                    colorStrokeMe={colorStrokeMe}
                    colorFillOther={colorFillOther}
                    colorStrokeOther={colorStrokeOther}
                    colorEdges={colorEdges}
                 />
                <GraphModal
                    open={open}
                    setOpen={setOpen}
                    id={nodeModalId}
                    label={nodeModalLabel}
                    data={nodeModalData}
                    source={edgeModalSource}
                    target={edgeModalTarget}
                />
                <CurrentSettingsModal
                    settingsOpen={settingsOpen}
                    settingsData={data.settings}
                />
                <ChangeSettingsModal
                    changeSettingsOpen={changeSettingsModal}
                    setChangeSettingsModal={setChangeSettingsModal}
                    colorFillCluster={colorFillCluster}
                    colorStrokeCluster={colorStrokeCluster}
                    colorFillMe={colorFillMe}
                    colorStrokeMe={colorStrokeMe}
                    colorFillOther={colorFillOther}
                    colorStrokeOther={colorStrokeOther}
                    colorEdges={colorEdges}
                    setColorFillCluster={setColorFillCluster}
                    setColorStrokeCluster={setColorStrokeCluster}
                    setColorFillMe={setColorFillMe}
                    setColorStrokeMe={setColorStrokeMe}
                    setColorFillOther={setColorFillOther}
                    setColorStrokeOther={setColorStrokeOther}
                    setColorEdges={setColorEdges}
                />
                <Button view="outlined" onClick={handleCenterMe}><CirclesConcentric /></Button>
                <Button view="outlined" onClick={handleUpdateGraph}><ArrowRotateRight/></Button>
                <Button view="outlined" onClick={handleSettingsOpen}><ChevronsDownWide/></Button>
                <Button view="outlined" onClick={handleChangeSettingsOpen}><Gear/></Button>
            </Graphin>
            
        </div>
    );
}