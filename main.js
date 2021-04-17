let width = 155,
    height = 215;

const starCoord = [
    {
        id: "vertix-00",
        x: 5,
        y: 5
    },
    {
        id: "vertix-01",
        x: 115,
        y: 15
    },
    {
        id: "vertix-11",
        x: 150,
        y: 190
    },
    {
        id: "vertix-10",
        x: 32,
        y: 210
    },
    
    {
        id: "belt-1",
        x: 52,
        y: 115
    },
    {
        id: "belt-2",
        x: 72,
        y: 107
    },
    {
        id: "belt-3",
        x: 92,
        y: 96
    }
];

let randomStars = [],
    i = 0;
while (i < 30) {
    randomStars.push({
        x: Math.random()*window.innerWidth,
        y: Math.random()*window.innerHeight
    });
    i++;
}

document.addEventListener('DOMContentLoaded', () => {
    let svg = d3.select(".orion").append("svg")
        .attr("width", width)
        .attr("height", height);

    starCoord.forEach(coord => {
        svg.append("circle")
            .attr("cx", coord.x)
            .attr("cy", coord.y)
            .attr("r", 3)
            .attr("id", coord.id)
            .attr("class", "orion-star")
            .style("fill", "#FFFFFF")
            .style("opacity", 0);

        svg.selectAll("circle")
            .transition()
            .duration(1000)
            .delay(function(star, index) {
                let starDelay;
                if (index < 4) {
                    starDelay = 300*index;
                } else if (index == 4) {
                    starDelay = 1600;
                } else {
                    starDelay = 1100 + 100*index;
                }
                return 300 + starDelay;
            })
            .style("opacity", 1);
    });

    let svgStars = d3.select(".sky-container").append("svg")
        .attr("width", "100%")
        .attr("height", "100%")
        .style("position", "absolute")
        .style("top", 0)
        .style("left", 0);

    randomStars.forEach(star => {
        svgStars.append("circle")
            .attr("cx", star.x)
            .attr("cy", star.y)
            .attr("r", 1)
            .attr("class", "sky-star")
            .style("fill", "#FFFFFF")
            .style("opacity", .7);
    })
});

setTimeout(() => {
    document.querySelector('.subtitle').style.transition = "ease 2s";
    document.querySelector('.subtitle').style.opacity = "1";
}, 2500)
