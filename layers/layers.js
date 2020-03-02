var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_PercentHouseholdsReceivingSNAP_1 = new ol.format.GeoJSON();
var features_PercentHouseholdsReceivingSNAP_1 = format_PercentHouseholdsReceivingSNAP_1.readFeatures(json_PercentHouseholdsReceivingSNAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentHouseholdsReceivingSNAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentHouseholdsReceivingSNAP_1.addFeatures(features_PercentHouseholdsReceivingSNAP_1);
var lyr_PercentHouseholdsReceivingSNAP_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentHouseholdsReceivingSNAP_1, 
                style: style_PercentHouseholdsReceivingSNAP_1,
                interactive: true,
    title: 'Percent Households Receiving SNAP<br />\
    <img src="styles/legend/PercentHouseholdsReceivingSNAP_1_0.png" />  0.0000 - 4.2000 <br />\
    <img src="styles/legend/PercentHouseholdsReceivingSNAP_1_1.png" />  4.2000 - 8.2000 <br />\
    <img src="styles/legend/PercentHouseholdsReceivingSNAP_1_2.png" />  8.2000 - 12.6000 <br />\
    <img src="styles/legend/PercentHouseholdsReceivingSNAP_1_3.png" />  12.6000 - 18.9000 <br />\
    <img src="styles/legend/PercentHouseholdsReceivingSNAP_1_4.png" />  18.9000 - 100.0000 <br />'
        });
var format_PercentNoInternet_2 = new ol.format.GeoJSON();
var features_PercentNoInternet_2 = format_PercentNoInternet_2.readFeatures(json_PercentNoInternet_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PercentNoInternet_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PercentNoInternet_2.addFeatures(features_PercentNoInternet_2);
var lyr_PercentNoInternet_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PercentNoInternet_2, 
                style: style_PercentNoInternet_2,
                interactive: true,
    title: 'Percent No Internet<br />\
    <img src="styles/legend/PercentNoInternet_2_0.png" />  0.0000 - 11.8031 <br />\
    <img src="styles/legend/PercentNoInternet_2_1.png" />  11.8031 - 18.3194 <br />\
    <img src="styles/legend/PercentNoInternet_2_2.png" />  18.3194 - 24.4111 <br />\
    <img src="styles/legend/PercentNoInternet_2_3.png" />  24.4111 - 32.4675 <br />\
    <img src="styles/legend/PercentNoInternet_2_4.png" />  32.4675 - 100.0000 <br />'
        });
var format_Poverty_3 = new ol.format.GeoJSON();
var features_Poverty_3 = format_Poverty_3.readFeatures(json_Poverty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poverty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poverty_3.addFeatures(features_Poverty_3);
var lyr_Poverty_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poverty_3, 
                style: style_Poverty_3,
                interactive: true,
    title: 'Poverty<br />\
    <img src="styles/legend/Poverty_3_0.png" />  0.0 - 5.9 <br />\
    <img src="styles/legend/Poverty_3_1.png" />  5.9 - 9.8 <br />\
    <img src="styles/legend/Poverty_3_2.png" />  9.8 - 14.1 <br />\
    <img src="styles/legend/Poverty_3_3.png" />  14.1 - 20.7 <br />\
    <img src="styles/legend/Poverty_3_4.png" />  20.7 - 100.0 <br />'
        });
var format_PopulationDensity_4 = new ol.format.GeoJSON();
var features_PopulationDensity_4 = format_PopulationDensity_4.readFeatures(json_PopulationDensity_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationDensity_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationDensity_4.addFeatures(features_PopulationDensity_4);
var lyr_PopulationDensity_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PopulationDensity_4, 
                style: style_PopulationDensity_4,
                interactive: true,
    title: 'Population Density<br />\
    <img src="styles/legend/PopulationDensity_4_0.png" />  0.0000 - 13.6200 <br />\
    <img src="styles/legend/PopulationDensity_4_1.png" />  13.6200 - 41.6800 <br />\
    <img src="styles/legend/PopulationDensity_4_2.png" />  41.6800 - 131.2500 <br />\
    <img src="styles/legend/PopulationDensity_4_3.png" />  131.2500 - 1116.0500 <br />\
    <img src="styles/legend/PopulationDensity_4_4.png" />  1116.0500 - 152562.1700 <br />'
        });
var format_ZCTAs_5 = new ol.format.GeoJSON();
var features_ZCTAs_5 = format_ZCTAs_5.readFeatures(json_ZCTAs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZCTAs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZCTAs_5.addFeatures(features_ZCTAs_5);
var lyr_ZCTAs_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZCTAs_5, 
                style: style_ZCTAs_5,
                interactive: true,
                title: '<img src="styles/legend/ZCTAs_5.png" /> ZCTAs'
            });
var format_allpostoffices_6 = new ol.format.GeoJSON();
var features_allpostoffices_6 = format_allpostoffices_6.readFeatures(json_allpostoffices_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allpostoffices_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allpostoffices_6.addFeatures(features_allpostoffices_6);cluster_allpostoffices_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_allpostoffices_6
});
var lyr_allpostoffices_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_allpostoffices_6, 
                style: style_allpostoffices_6,
                interactive: true,
                title: '<img src="styles/legend/allpostoffices_6.png" /> allpostoffices'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_PercentHouseholdsReceivingSNAP_1.setVisible(false);lyr_PercentNoInternet_2.setVisible(false);lyr_Poverty_3.setVisible(false);lyr_PopulationDensity_4.setVisible(false);lyr_ZCTAs_5.setVisible(true);lyr_allpostoffices_6.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_PercentHouseholdsReceivingSNAP_1,lyr_PercentNoInternet_2,lyr_Poverty_3,lyr_PopulationDensity_4,lyr_ZCTAs_5,lyr_allpostoffices_6];
lyr_PercentHouseholdsReceivingSNAP_1.set('fieldAliases', {'ZCTA': 'ZCTA', 'ZCTA5CE': 'ZCTA5CE', 'AFFGEOI': 'AFFGEOI', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER1': 'AWATER1', 'Pp_Dnst': 'Pp_Dnst', 'Prcnt_P': 'Prcnt_P', 'P_H_R_S': 'P_H_R_S', 'p__2010': 'p__2010', 'prcnt__': 'prcnt__', 'Rural': 'Rural', });
lyr_PercentNoInternet_2.set('fieldAliases', {'ZCTA': 'ZCTA', 'ZCTA5CE': 'ZCTA5CE', 'AFFGEOI': 'AFFGEOI', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER1': 'AWATER1', 'Pp_Dnst': 'Pp_Dnst', 'Prcnt_P': 'Prcnt_P', 'P_H_R_S': 'P_H_R_S', 'p__2010': 'p__2010', 'prcnt__': 'prcnt__', 'Rural': 'Rural', });
lyr_Poverty_3.set('fieldAliases', {'ZCTA': 'ZCTA', 'ZCTA5CE': 'ZCTA5CE', 'AFFGEOI': 'AFFGEOI', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER1': 'AWATER1', 'Pp_Dnst': 'Pp_Dnst', 'Prcnt_P': 'Prcnt_P', 'P_H_R_S': 'P_H_R_S', 'p__2010': 'p__2010', 'prcnt__': 'prcnt__', 'Rural': 'Rural', });
lyr_PopulationDensity_4.set('fieldAliases', {'ZCTA': 'ZCTA', 'ZCTA5CE': 'ZCTA5CE', 'AFFGEOI': 'AFFGEOI', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER1': 'AWATER1', 'Pp_Dnst': 'Population Density', 'Prcnt_P': 'Prcnt_P', 'P_H_R_S': 'P_H_R_S', 'p__2010': 'p__2010', 'prcnt__': 'prcnt__', 'Rural': 'Rural', });
lyr_ZCTAs_5.set('fieldAliases', {'ZCTA': 'ZCTA', 'ZCTA5CE': 'ZCTA5CE', 'AFFGEOI': 'AFFGEOI', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER1': 'AWATER1', 'Pp_Dnst': 'Pp_Dnst', 'Prcnt_P': 'Prcnt_P', 'P_H_R_S': 'P_H_R_S', 'p__2010': 'p__2010', 'prcnt__': 'prcnt__', 'Rural': 'Rural', });
lyr_allpostoffices_6.set('fieldAliases', {'Fin.Sub': 'Fin.Sub', 'PO.Name': 'PO.Name', 'Unit.Name': 'Unit.Name', 'Property.A': 'Property.A', 'City': 'City', 'ST': 'ST', 'ZIP.Code': 'ZIP.Code', 'Fac.Subtyp': 'Fac.Subtyp', });
lyr_PercentHouseholdsReceivingSNAP_1.set('fieldImages', {'ZCTA': 'TextEdit', 'ZCTA5CE': 'Hidden', 'AFFGEOI': 'Hidden', 'GEOID10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER1': 'Hidden', 'Pp_Dnst': 'Hidden', 'Prcnt_P': 'Hidden', 'P_H_R_S': 'TextEdit', 'p__2010': 'Hidden', 'prcnt__': 'Hidden', 'Rural': 'Hidden', });
lyr_PercentNoInternet_2.set('fieldImages', {'ZCTA': 'TextEdit', 'ZCTA5CE': 'Hidden', 'AFFGEOI': 'Hidden', 'GEOID10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER1': 'Hidden', 'Pp_Dnst': 'Hidden', 'Prcnt_P': 'Hidden', 'P_H_R_S': 'Hidden', 'p__2010': 'Hidden', 'prcnt__': 'TextEdit', 'Rural': 'Hidden', });
lyr_Poverty_3.set('fieldImages', {'ZCTA': 'TextEdit', 'ZCTA5CE': 'Hidden', 'AFFGEOI': 'Hidden', 'GEOID10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER1': 'Hidden', 'Pp_Dnst': 'Hidden', 'Prcnt_P': 'TextEdit', 'P_H_R_S': 'Hidden', 'p__2010': 'Hidden', 'prcnt__': 'Hidden', 'Rural': 'Hidden', });
lyr_PopulationDensity_4.set('fieldImages', {'ZCTA': 'TextEdit', 'ZCTA5CE': 'Hidden', 'AFFGEOI': 'Hidden', 'GEOID10': 'Hidden', 'ALAND10': 'Hidden', 'AWATER1': 'Hidden', 'Pp_Dnst': 'TextEdit', 'Prcnt_P': 'Hidden', 'P_H_R_S': 'Hidden', 'p__2010': 'Hidden', 'prcnt__': 'Hidden', 'Rural': 'Hidden', });
lyr_ZCTAs_5.set('fieldImages', {'ZCTA': 'TextEdit', 'ZCTA5CE': 'TextEdit', 'AFFGEOI': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER1': 'TextEdit', 'Pp_Dnst': 'TextEdit', 'Prcnt_P': 'TextEdit', 'P_H_R_S': 'TextEdit', 'p__2010': 'TextEdit', 'prcnt__': 'TextEdit', 'Rural': 'TextEdit', });
lyr_allpostoffices_6.set('fieldImages', {'Fin.Sub': 'TextEdit', 'PO.Name': 'TextEdit', 'Unit.Name': 'TextEdit', 'Property.A': 'TextEdit', 'City': 'TextEdit', 'ST': 'TextEdit', 'ZIP.Code': 'TextEdit', 'Fac.Subtyp': 'TextEdit', });
lyr_PercentHouseholdsReceivingSNAP_1.set('fieldLabels', {'ZCTA': 'no label', 'ZCTA5CE': 'no label', 'AFFGEOI': 'no label', 'GEOID10': 'no label', 'ALAND10': 'no label', 'AWATER1': 'no label', 'Pp_Dnst': 'no label', 'Prcnt_P': 'no label', 'P_H_R_S': 'no label', 'p__2010': 'no label', 'prcnt__': 'no label', 'Rural': 'no label', });
lyr_PercentNoInternet_2.set('fieldLabels', {'ZCTA': 'no label', 'ZCTA5CE': 'no label', 'AFFGEOI': 'no label', 'GEOID10': 'no label', 'ALAND10': 'no label', 'AWATER1': 'no label', 'Pp_Dnst': 'no label', 'Prcnt_P': 'no label', 'P_H_R_S': 'no label', 'p__2010': 'no label', 'prcnt__': 'no label', 'Rural': 'no label', });
lyr_Poverty_3.set('fieldLabels', {'ZCTA': 'no label', 'ZCTA5CE': 'no label', 'AFFGEOI': 'no label', 'GEOID10': 'no label', 'ALAND10': 'no label', 'AWATER1': 'no label', 'Pp_Dnst': 'no label', 'Prcnt_P': 'no label', 'P_H_R_S': 'no label', 'p__2010': 'no label', 'prcnt__': 'no label', 'Rural': 'no label', });
lyr_PopulationDensity_4.set('fieldLabels', {'ZCTA': 'inline label', 'Pp_Dnst': 'no label', 'Prcnt_P': 'no label', 'P_H_R_S': 'no label', 'p__2010': 'no label', 'prcnt__': 'no label', 'Rural': 'no label', });
lyr_ZCTAs_5.set('fieldLabels', {'ZCTA': 'no label', 'ZCTA5CE': 'no label', 'AFFGEOI': 'no label', 'GEOID10': 'no label', 'ALAND10': 'no label', 'AWATER1': 'no label', 'Pp_Dnst': 'no label', 'Prcnt_P': 'no label', 'P_H_R_S': 'no label', 'p__2010': 'no label', 'prcnt__': 'no label', 'Rural': 'no label', });
lyr_allpostoffices_6.set('fieldLabels', {'Fin.Sub': 'no label', 'PO.Name': 'no label', 'Unit.Name': 'no label', 'Property.A': 'no label', 'City': 'no label', 'ST': 'no label', 'ZIP.Code': 'no label', 'Fac.Subtyp': 'no label', });
lyr_allpostoffices_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});