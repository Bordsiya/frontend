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
import {TrashBin} from '@gravity-ui/icons';
import { AnalyseGraphModal } from './AnalyseGraphModal';
import {ChartMixed} from '@gravity-ui/icons';
import {FileMagnifier} from '@gravity-ui/icons';
import { ViewReportModal } from './ViewReportModal';
import { RelationModal } from './RelationModal';

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
            apis.focusNodeById('node5');
            let meNode = graph.findById('node5');
            graph.setItemState(meNode, 'selected', false);
            setCenterMe(false);
        }

        if (colorFillCluster) {
            console.log('colorFillCluster');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && data.tags.includes("cluster-element") && !data.tags.includes("me")) {
                const updatedStyle = {
                    ...model.style,
                    keyshape: {
                    ...model.style.keyshape,
                    fill: colorFillCluster,
                    }
                };

                graph.updateItem(node, {
                        style: updatedStyle
                    });
                }
            });
        }
        if (colorStrokeCluster) {
            console.log('colorStrokeCluster');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && data.tags.includes("cluster-element") && !data.tags.includes("me")) {
                const updatedStyle = {
                    ...model.style,
                    keyshape: {
                    ...model.style.keyshape,
                    stroke: colorStrokeCluster, 
                    }
                };

                graph.updateItem(node, {
                        style: updatedStyle
                    });
                }
            });
        }
        if (colorFillMe) {
            console.log('colorFillMe');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && data.tags.includes("me")) {
                    const updatedStyle = {
                        ...model.style,
                        keyshape: {
                        ...model.style.keyshape,
                        fill: colorFillMe, 
                        }
                    };

                    graph.updateItem(node, {
                            style: updatedStyle
                        });
                }
            });
        }
        if (colorStrokeMe) {
            console.log('colorStrokeMe');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && data.tags.includes("me")) {
                    const updatedStyle = {
                        ...model.style,
                        keyshape: {
                        ...model.style.keyshape,
                        stroke: colorStrokeMe, 
                        }
                    };

                    graph.updateItem(node, {
                            style: updatedStyle
                        });
                }
            });
        }
        if (colorFillOther) {
            console.log('colorFillOther');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && !data.tags.includes("cluster-element")) {
                    const updatedStyle = {
                        ...model.style,
                        keyshape: {
                        ...model.style.keyshape,
                        fill: colorFillOther, 
                        }
                    };

                    graph.updateItem(node, {
                            style: updatedStyle
                        });
                }
            });
        }
        if (colorStrokeOther) {
            console.log('colorStrokeOther');
            const nodes = graph.getNodes();
            nodes.forEach(node => {
                const model = node.getModel();
                const data = model.data;

                if (data.tags && !data.tags.includes("cluster-element")) {
                    const updatedStyle = {
                        ...model.style,
                        keyshape: {
                        ...model.style.keyshape,
                        stroke: colorStrokeOther, 
                        }
                    };

                    graph.updateItem(node, {
                            style: updatedStyle
                        });
                }
            });
        }
        if (colorEdges) {
            console.log('colorEdges');
            const edges = graph.getEdges();
            edges.forEach((edge) => {
                const currentModel = edge.getModel();
                const newModel = {
                    ...currentModel,
                    style: {
                        ...currentModel.style,
                        label: {
                            ...currentModel.style.label,
                            fill: colorEdges,
                        },
                        keyshape: {
                            ...currentModel.style.keyshape,
                            stroke: colorEdges,
                        }
                    }
                };
                graph.updateItem(edge, newModel);
            });
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
    baseRevision,
    setBaseRevision,
    reportData,
}) {
    const [open, setOpen] = useState(false);

    const [nodeModalId, setNodeModalId] = useState(0);
    const [nodeModalLabel, setNodeModalLabel] = useState('');
    const [edgeModalSource, setEdgeModalSouce] = useState(null);
    const [edgeModalTarget, setEdgeModalTarget] = useState(null);
    const [nodeModalData, setNodeModalData] = useState({});
    const [centerMe, setCenterMe] = useState(false);

    const [settingsOpen, setSettingsOpen] = useState(false);
    const [analyseOpen, setAnalyseOpen] = useState(false);
    const [changeSettingsModal, setChangeSettingsModal] = useState(false);
    const [viewReportOpen, setViewReportOpen] = useState(false);
    const [relationOpen, setRelationOpen] = useState(false);

    let defaultColorFillCluster = data.nodes
        .filter(node => node.data.tags.includes('cluster-element') && !node.data.tags.includes('me'))
        .map(node => node.style.keyshape.fill);
    defaultColorFillCluster = defaultColorFillCluster.length > 0 ? defaultColorFillCluster[0] : '#FFFF00';

    let defaultColorStrokeCluster = data.nodes
        .filter(node => node.data.tags.includes('cluster-element') && !node.data.tags.includes('me'))
        .map(node => node.style.keyshape.stroke);
    defaultColorStrokeCluster = defaultColorStrokeCluster.length > 0 ? defaultColorStrokeCluster[0] : '#CCCC00';

    let defaultColorFillMe = data.nodes
        .filter(node => node.data.tags.includes('me'))
        .map(node => node.style.keyshape.fill);
    defaultColorFillMe = defaultColorFillMe.length > 0 ? defaultColorFillMe[0] : '#00FF00';

    let defaultColorStrokeMe = data.nodes
        .filter(node => node.data.tags.includes('me'))
        .map(node => node.style.keyshape.stroke);
    defaultColorStrokeMe = defaultColorStrokeMe.length > 0 ? defaultColorStrokeMe[0] : '#006400';

    let defaultColorFillOther = data.nodes 
        .filter(node => !node.data.tags.includes('cluster-element'))
        .map(node => node.style.keyshape.fill);
    defaultColorFillOther = defaultColorFillOther > 0 ? defaultColorFillOther[0] : '#8A2BE2';

    let defaultColorStrokeOther = data.nodes
        .filter(node => !node.data.tags.includes('cluster-element'))
        .map(node => node.style.keyshape.stroke);
    defaultColorStrokeOther = defaultColorStrokeOther > 0 ? defaultColorStrokeOther[0] : '#663399';

    let defaultColorEdges = data.edges
        .map(edge => edge.style.keyshape.stroke);
    defaultColorEdges = defaultColorEdges > 0 ? defaultColorEdges[0] : '#D3D3D3';

    const [colorFillCluster, setColorFillCluster] = useState(defaultColorFillCluster);
    const [colorStrokeCluster, setColorStrokeCluster] = useState(defaultColorStrokeCluster);
    const [colorFillMe, setColorFillMe] = useState(defaultColorFillMe);
    const [colorStrokeMe, setColorStrokeMe] = useState(defaultColorStrokeMe);
    const [colorFillOther, setColorFillOther] = useState(defaultColorFillOther);
    const [colorStrokeOther, setColorStrokeOther] = useState(defaultColorStrokeOther);
    const [colorEdges, setColorEdges] = useState(defaultColorEdges);

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
        setBaseRevision(baseRevision + 1);
        setResultAlertOpen(true);
        setResultAlertType('success');
        setResultAlertTitle('Успех');
        setResultAlertMessage('Обновление завершено успешно');
    }

    const handleAnalyseGraph = () => {
        if (analyseOpen) {
            setAnalyseOpen(false);
        } else {
            setAnalyseOpen(true);
        }
    }

    const handleViewReport = () => {
        if (viewReportOpen) {
            setViewReportOpen(false);
        } else {
            setViewReportOpen(true);
        }
    }

    const handleRelation = () => {
        if (relationOpen) {
            setRelationOpen(false);
        } else {
            setRelationOpen(true);
        }
    }
    
    return (
        <div className='graph-inside'>
                <Graphin data={data} layout={{ type: 'graphin-force' }}>
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
                    <AnalyseGraphModal 
                        analyseOpen={analyseOpen}
                        setAnalyseOpen={setAnalyseOpen}
                        setResultAlertOpen={setResultAlertOpen}
                        setResultAlertType={setResultAlertType}
                        setResultAlertTitle={setResultAlertTitle}
                        setResultAlertMessage={setResultAlertMessage}
                    />
                    <ViewReportModal
                        viewReportOpen={viewReportOpen}
                        setViewReportOpen={setViewReportOpen}
                        data={reportData}
                        setResultAlertOpen={setResultAlertOpen}
                        setResultAlertType={setResultAlertType}
                        setResultAlertTitle={setResultAlertTitle}
                        setResultAlertMessage={setResultAlertMessage}
                        graphData={data}
                    />
                    <RelationModal
                        relationData={data}
                        relationOpen={relationOpen}
                        setRelationOpen={setRelationOpen}
                    />
                    <div className='actions'>
                        <Button view="outlined" onClick={handleCenterMe}><CirclesConcentric /></Button>
                        <Button view="outlined" onClick={handleUpdateGraph}><ArrowRotateRight/></Button>
                        <Button view="outlined" onClick={handleSettingsOpen}><ChevronsDownWide/></Button>
                        <Button view="outlined" onClick={handleChangeSettingsOpen}><Gear/></Button>
                        <Button view="outlined" onClick={handleAnalyseGraph}><ChartMixed/></Button>
                        <Button view="outlined" onClick={handleViewReport}><FileMagnifier/></Button>
                    </div>
                    
                </Graphin>
            </div>
    );
}