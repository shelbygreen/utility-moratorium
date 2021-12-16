// store map configuration & layers

// initial conditions
export const config = {
    accessToken: "pk.eyJ1IjoicGFzaWgiLCJhIjoiY2pybzJqdTVjMHJzeDQ0bW80aGdzaXV3ayJ9.yxD8Nqu7FLnf8-lBo7F1zQ",
    minZoom: 5,
    padding: 0.1
}

// sources for the map layers
export const sources = {
    points: {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/Open-Data-Tallahassee/utilities/dev/data/disconnected_09242021.geojson',
    },
}

// settings for the map layers
export const layers = [
    {
      id: "points-fill",
      source: 'points',
      type: 'circle',
      paint: {
        'circle-color': 'black',
        'circle-radius': {
            'base': 1.75,
            'stops': [
                [12, 2],
                [22, 180]
            ]
        },
        // 'circle-outline-color': 'white'
      },
      layout: {
        visibility: 'visible',
        },
    }
]