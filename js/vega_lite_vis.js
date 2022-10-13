var vg_1="world_internet_user.vg.json";
var vg_2="continent_avg_internet_plan.vg.json";
var vg_3="top_10_country.vg.json";
var vg_4="avg_speed_avg_price.vg.json";

vegaEmbed("#choropleth_map",vg_1, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#pie_chart",vg_2, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#bar_chart",vg_3, {"actions": false}).then(function(result){
}).catch(console.error);

vegaEmbed("#scatter_plot",vg_4, {"actions": false}).then(function(result){
}).catch(console.error);