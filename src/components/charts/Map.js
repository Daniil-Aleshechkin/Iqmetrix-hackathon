import React, {Component} from 'react';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  Zoom,
  Legend,
  Selection,
  Highlight,
  MapsTooltip,
  DataLabel
} from '@syncfusion/ej2-react-maps';


import {canada_map} from '../../datafiles/Canada.ts';
import {world_map} from '../../datafiles/World.ts';

class Map extends Component {

  constructor() {
    super();
    this.state= {
      plat:
        ['#f1eef6',
          '#d0d1e6',
          '#a6bddb',
          '#74a9cf',
          '#3690c0',
          '#0570b0',
          '#034e7b']

    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <MapsComponent baseLayerIndex={1}  id="maps"
                       zoomSettings={{
                         shouldZoomInitially:true,
                         enable: true,
                         pinchZooming: true,
        mouseWheelZoom: true
      }}  legendSettings={{ visible: true }} width='100%' height='100%'>
        <Inject services={[Zoom, Selection, Highlight, MapsTooltip, DataLabel, Legend ]} />
        <LayersDirective >
          <LayerDirective shapeData={world_map} shapeSettings={{
            fill: '#ffffff',
            border: {width: 0.5, color: 'White'},
          }}
                          selectionSettings={{
                            enable: true,
                            fill: 'red',
                            border: {color: 'white', width: 2}
                          }}


          />
          <LayerDirective shapeData={canada_map}
                          animationDuration={500}
                          shapePropertyPath='CDNAME'
                          shapeSettings={{
                            autofill: true,
                            palette: this.state.plat,
                            border: {width: 1, color: 'white'},
                            colorValuePath: 'Membership',
                            colorMapping: [
                              {
                                from: 0, to: 99, color: '#f1eef6',
                              },
                              {
                                from: 100, to: 999, color: '#d0d1e6',
                              }, {
                                from: 1000, to: 9999, color:  '#a6bddb',
                              },
                              {
                                from: 10000, to: 99999, color: '#74a9cf',
                              }, {
                                from: 100000, to: 999999, color: '#3690c0',
                              },
                              // {
                              //   from: 101, to: 200, color: '#0570b0',
                              // }, {
                              //   from: 0, to: 100, color: '#034e7b',
                              // },
                              {
                                color: 'rgb(77,112,184)'
                              }
                            ]
                          }}
                          highlightSettings={{
                            enable: true,
                            fill: 'green',
                            border: {color: 'white', width: 2}
                          }}
                          tooltipSettings={{
                            visible: true,
                            valuePath: 'CDNAME'
                          }}
                          dataLabelSettings={{
                            visible: true,
                            labelPath: 'name',
                          }}

          />
        </LayersDirective>
      </MapsComponent>


    );

  }
}

export default Map;
