ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([1313636.779040, 9176424.015565, 1327618.686534, 9184972.276200]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_Mojokerto_OSM_Cut_2 = new ol.format.GeoJSON();
var features_Jalan_Mojokerto_OSM_Cut_2 = format_Jalan_Mojokerto_OSM_Cut_2.readFeatures(json_Jalan_Mojokerto_OSM_Cut_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Jalan_Mojokerto_OSM_Cut_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_Mojokerto_OSM_Cut_2.addFeatures(features_Jalan_Mojokerto_OSM_Cut_2);
var lyr_Jalan_Mojokerto_OSM_Cut_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_Mojokerto_OSM_Cut_2, 
                style: style_Jalan_Mojokerto_OSM_Cut_2,
                popuplayertitle: 'Jalan_Mojokerto_OSM_Cut',
                interactive: false,
    title: 'Jalan_Mojokerto_OSM_Cut<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_1.png" /> Jalan Akses<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_2.png" /> Jalan Bentang Alam<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_3.png" /> Jalan Lingkungan<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_4.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_5.png" /> Jalan setapak<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_6.png" /> Jalan Tol<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_7.png" /> Jalur perjalan kaki<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_8.png" /> Kolektor Primer<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_9.png" /> Kolektor Sekunder<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_10.png" /> Link Tol<br />\
    <img src="styles/legend/Jalan_Mojokerto_OSM_Cut_2_11.png" /> <br />' });
var format_Bhagas_Surya_Dewanto_3 = new ol.format.GeoJSON();
var features_Bhagas_Surya_Dewanto_3 = format_Bhagas_Surya_Dewanto_3.readFeatures(json_Bhagas_Surya_Dewanto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Bhagas_Surya_Dewanto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bhagas_Surya_Dewanto_3.addFeatures(features_Bhagas_Surya_Dewanto_3);
var lyr_Bhagas_Surya_Dewanto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bhagas_Surya_Dewanto_3, 
                style: style_Bhagas_Surya_Dewanto_3,
                popuplayertitle: 'Bhagas_Surya_Dewanto',
                interactive: true,
    title: 'Bhagas_Surya_Dewanto<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_0.png" /> 9<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_1.png" /> 8<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_2.png" /> 7<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_3.png" /> 6<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_4.png" /> 5<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_5.png" /> 48<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_6.png" /> 47<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_7.png" /> 46<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_8.png" /> 45<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_9.png" /> 44<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_10.png" /> 43<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_11.png" /> 42<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_12.png" /> 41<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_13.png" /> 40<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_14.png" /> 4<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_15.png" /> 39<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_16.png" /> 38<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_17.png" /> 37<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_18.png" /> 36<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_19.png" /> 35<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_20.png" /> 34<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_21.png" /> 33<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_22.png" /> 32<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_23.png" /> 31<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_24.png" /> 30<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_25.png" /> 3<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_26.png" /> 29<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_27.png" /> 28<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_28.png" /> 27<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_29.png" /> 26<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_30.png" /> 25<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_31.png" /> 24<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_32.png" /> 23<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_33.png" /> 22<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_34.png" /> 21<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_35.png" /> 20<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_36.png" /> 2<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_37.png" /> 19<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_38.png" /> 18<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_39.png" /> 17<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_40.png" /> 16<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_41.png" /> 15<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_42.png" /> 14<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_43.png" /> 13<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_44.png" /> 12<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_45.png" /> 11<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_46.png" /> 10<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_47.png" /> 1<br />\
    <img src="styles/legend/Bhagas_Surya_Dewanto_3_48.png" /> <br />' });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatelliteHybrid_1,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Jalan_Mojokerto_OSM_Cut_2.setVisible(true);lyr_Bhagas_Surya_Dewanto_3.setVisible(true);
var layersList = [group_Basemap,lyr_Jalan_Mojokerto_OSM_Cut_2,lyr_Bhagas_Surya_Dewanto_3];
lyr_Jalan_Mojokerto_OSM_Cut_2.set('fieldAliases', {'code': 'code', 'fclass': 'fclass', 'name': 'name', 'oneway': 'oneway', 'bridge': 'bridge', 'tunnel': 'tunnel', 'EditBy': 'EditBy', });
lyr_Bhagas_Surya_Dewanto_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'SKALA': 'SKALA', 'THNNILAI': 'THNNILAI', 'cluster': 'cluster', 'NOZN': 'NOZN', 'JNSZN': 'JNSZN', 'PENGGUNAAN': 'PENGGUNAAN', 'HISTZONE': 'HISTZONE', 'JMLSMPL': 'JMLSMPL', 'JENISSAMPE': 'JENISSAMPE', 'BEDA_ZONA': 'BEDA_ZONA', 'NILMIN': 'NILMIN', 'NILMAKS': 'NILMAKS', 'JMLNILAI': 'JMLNILAI', 'SMPBKREL': 'SMPBKREL', 'SMPBAKU': 'SMPBAKU', 'NILAIZN': 'NILAIZN', 'NILBULAT': 'NILBULAT', 'Luas_M2': 'Luas_M2', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', 'Surveyor': 'Surveyor', 'Kode Zona': 'Kode Zona', });
lyr_Jalan_Mojokerto_OSM_Cut_2.set('fieldImages', {'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'oneway': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'EditBy': 'TextEdit', });
lyr_Bhagas_Surya_Dewanto_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'SKALA': 'TextEdit', 'THNNILAI': 'TextEdit', 'cluster': 'TextEdit', 'NOZN': 'TextEdit', 'JNSZN': 'Range', 'PENGGUNAAN': 'TextEdit', 'HISTZONE': 'TextEdit', 'JMLSMPL': 'TextEdit', 'JENISSAMPE': 'TextEdit', 'BEDA_ZONA': 'TextEdit', 'NILMIN': 'TextEdit', 'NILMAKS': 'TextEdit', 'JMLNILAI': 'TextEdit', 'SMPBKREL': 'TextEdit', 'SMPBAKU': 'TextEdit', 'NILAIZN': 'TextEdit', 'NILBULAT': 'TextEdit', 'Luas_M2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', 'Surveyor': 'TextEdit', 'Kode Zona': 'TextEdit', });
lyr_Jalan_Mojokerto_OSM_Cut_2.set('fieldLabels', {'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'EditBy': 'no label', });
lyr_Bhagas_Surya_Dewanto_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'SKALA': 'hidden field', 'THNNILAI': 'hidden field', 'cluster': 'hidden field', 'NOZN': 'inline label - always visible', 'JNSZN': 'inline label - always visible', 'PENGGUNAAN': 'inline label - always visible', 'HISTZONE': 'hidden field', 'JMLSMPL': 'hidden field', 'JENISSAMPE': 'hidden field', 'BEDA_ZONA': 'hidden field', 'NILMIN': 'hidden field', 'NILMAKS': 'hidden field', 'JMLNILAI': 'hidden field', 'SMPBKREL': 'hidden field', 'SMPBAKU': 'hidden field', 'NILAIZN': 'hidden field', 'NILBULAT': 'hidden field', 'Luas_M2': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', 'Surveyor': 'inline label - always visible', 'Kode Zona': 'no label', });
lyr_Bhagas_Surya_Dewanto_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});