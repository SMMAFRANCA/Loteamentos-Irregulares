ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([218228.220346, 7699987.750491, 292056.206592, 7741660.188040]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_reaurbana_3 = new ol.format.GeoJSON();
var features_reaurbana_3 = format_reaurbana_3.readFeatures(json_reaurbana_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_reaurbana_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbana_3.addFeatures(features_reaurbana_3);
var lyr_reaurbana_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaurbana_3, 
                style: style_reaurbana_3,
                popuplayertitle: 'Área urbana',
                interactive: false,
                title: '<img src="styles/legend/reaurbana_3.png" /> Área urbana'
            });
var format_LimiteMunicipal_4 = new ol.format.GeoJSON();
var features_LimiteMunicipal_4 = format_LimiteMunicipal_4.readFeatures(json_LimiteMunicipal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimiteMunicipal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteMunicipal_4.addFeatures(features_LimiteMunicipal_4);
var lyr_LimiteMunicipal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimiteMunicipal_4, 
                style: style_LimiteMunicipal_4,
                popuplayertitle: 'Limite Municipal',
                interactive: false,
                title: '<img src="styles/legend/LimiteMunicipal_4.png" /> Limite Municipal'
            });
var format_AODAUSFase1_5 = new ol.format.GeoJSON();
var features_AODAUSFase1_5 = format_AODAUSFase1_5.readFeatures(json_AODAUSFase1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase1_5.addFeatures(features_AODAUSFase1_5);
var lyr_AODAUSFase1_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase1_5, 
                style: style_AODAUSFase1_5,
                popuplayertitle: 'AOD - AUS Fase 1',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase1_5.png" /> AOD - AUS Fase 1'
            });
var format_AODAUSFase2_6 = new ol.format.GeoJSON();
var features_AODAUSFase2_6 = format_AODAUSFase2_6.readFeatures(json_AODAUSFase2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODAUSFase2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODAUSFase2_6.addFeatures(features_AODAUSFase2_6);
var lyr_AODAUSFase2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODAUSFase2_6, 
                style: style_AODAUSFase2_6,
                popuplayertitle: 'AOD - AUS Fase 2',
                interactive: true,
                title: '<img src="styles/legend/AODAUSFase2_6.png" /> AOD - AUS Fase 2'
            });
var format_AODBaixaDensidadeNvel1_7 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel1_7 = format_AODBaixaDensidadeNvel1_7.readFeatures(json_AODBaixaDensidadeNvel1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel1_7.addFeatures(features_AODBaixaDensidadeNvel1_7);
var lyr_AODBaixaDensidadeNvel1_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel1_7, 
                style: style_AODBaixaDensidadeNvel1_7,
                popuplayertitle: 'AOD - Baixa Densidade Nível 1',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel1_7.png" /> AOD - Baixa Densidade Nível 1'
            });
var format_AODBaixaDensidadeNvel2_8 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel2_8 = format_AODBaixaDensidadeNvel2_8.readFeatures(json_AODBaixaDensidadeNvel2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel2_8.addFeatures(features_AODBaixaDensidadeNvel2_8);
var lyr_AODBaixaDensidadeNvel2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel2_8, 
                style: style_AODBaixaDensidadeNvel2_8,
                popuplayertitle: 'AOD - Baixa Densidade Nível 2',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel2_8.png" /> AOD - Baixa Densidade Nível 2'
            });
var format_AODBaixaDensidadeNvel3_9 = new ol.format.GeoJSON();
var features_AODBaixaDensidadeNvel3_9 = format_AODBaixaDensidadeNvel3_9.readFeatures(json_AODBaixaDensidadeNvel3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODBaixaDensidadeNvel3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODBaixaDensidadeNvel3_9.addFeatures(features_AODBaixaDensidadeNvel3_9);
var lyr_AODBaixaDensidadeNvel3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODBaixaDensidadeNvel3_9, 
                style: style_AODBaixaDensidadeNvel3_9,
                popuplayertitle: 'AOD - Baixa Densidade Nível 3',
                interactive: true,
                title: '<img src="styles/legend/AODBaixaDensidadeNvel3_9.png" /> AOD - Baixa Densidade Nível 3'
            });
var format_AODreaUrbanaConsolidada_10 = new ol.format.GeoJSON();
var features_AODreaUrbanaConsolidada_10 = format_AODreaUrbanaConsolidada_10.readFeatures(json_AODreaUrbanaConsolidada_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AODreaUrbanaConsolidada_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AODreaUrbanaConsolidada_10.addFeatures(features_AODreaUrbanaConsolidada_10);
var lyr_AODreaUrbanaConsolidada_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AODreaUrbanaConsolidada_10, 
                style: style_AODreaUrbanaConsolidada_10,
                popuplayertitle: 'AOD - Área Urbana Consolidada',
                interactive: true,
                title: '<img src="styles/legend/AODreaUrbanaConsolidada_10.png" /> AOD - Área Urbana Consolidada'
            });
var format_ARAAterros_11 = new ol.format.GeoJSON();
var features_ARAAterros_11 = format_ARAAterros_11.readFeatures(json_ARAAterros_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAAterros_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAAterros_11.addFeatures(features_ARAAterros_11);
var lyr_ARAAterros_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAAterros_11, 
                style: style_ARAAterros_11,
                popuplayertitle: 'ARA - Aterros',
                interactive: true,
                title: '<img src="styles/legend/ARAAterros_11.png" /> ARA - Aterros'
            });
var format_ARAETELagoas_12 = new ol.format.GeoJSON();
var features_ARAETELagoas_12 = format_ARAETELagoas_12.readFeatures(json_ARAETELagoas_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAETELagoas_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAETELagoas_12.addFeatures(features_ARAETELagoas_12);
var lyr_ARAETELagoas_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAETELagoas_12, 
                style: style_ARAETELagoas_12,
                popuplayertitle: 'ARA - ETE Lagoas',
                interactive: true,
                title: '<img src="styles/legend/ARAETELagoas_12.png" /> ARA - ETE Lagoas'
            });
var format_ARAIncongrunciasemAPP_13 = new ol.format.GeoJSON();
var features_ARAIncongrunciasemAPP_13 = format_ARAIncongrunciasemAPP_13.readFeatures(json_ARAIncongrunciasemAPP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARAIncongrunciasemAPP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARAIncongrunciasemAPP_13.addFeatures(features_ARAIncongrunciasemAPP_13);
var lyr_ARAIncongrunciasemAPP_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARAIncongrunciasemAPP_13, 
                style: style_ARAIncongrunciasemAPP_13,
                popuplayertitle: 'ARA - Incongruências em APP',
                interactive: true,
                title: '<img src="styles/legend/ARAIncongrunciasemAPP_13.png" /> ARA - Incongruências em APP'
            });
var format_AROAPP_14 = new ol.format.GeoJSON();
var features_AROAPP_14 = format_AROAPP_14.readFeatures(json_AROAPP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROAPP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROAPP_14.addFeatures(features_AROAPP_14);
var lyr_AROAPP_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROAPP_14, 
                style: style_AROAPP_14,
                popuplayertitle: 'ARO - APP',
                interactive: true,
                title: '<img src="styles/legend/AROAPP_14.png" /> ARO - APP'
            });
var format_AROFaixadeCuestas_15 = new ol.format.GeoJSON();
var features_AROFaixadeCuestas_15 = format_AROFaixadeCuestas_15.readFeatures(json_AROFaixadeCuestas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROFaixadeCuestas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROFaixadeCuestas_15.addFeatures(features_AROFaixadeCuestas_15);
var lyr_AROFaixadeCuestas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROFaixadeCuestas_15, 
                style: style_AROFaixadeCuestas_15,
                popuplayertitle: 'ARO - Faixa de Cuestas',
                interactive: true,
                title: '<img src="styles/legend/AROFaixadeCuestas_15.png" /> ARO - Faixa de Cuestas'
            });
var format_ARORemanescentesFlorestais_16 = new ol.format.GeoJSON();
var features_ARORemanescentesFlorestais_16 = format_ARORemanescentesFlorestais_16.readFeatures(json_ARORemanescentesFlorestais_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ARORemanescentesFlorestais_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARORemanescentesFlorestais_16.addFeatures(features_ARORemanescentesFlorestais_16);
var lyr_ARORemanescentesFlorestais_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ARORemanescentesFlorestais_16, 
                style: style_ARORemanescentesFlorestais_16,
                popuplayertitle: 'ARO - Remanescentes Florestais',
                interactive: true,
                title: '<img src="styles/legend/ARORemanescentesFlorestais_16.png" /> ARO - Remanescentes Florestais'
            });
var format_AROreadeAmortecimento_17 = new ol.format.GeoJSON();
var features_AROreadeAmortecimento_17 = format_AROreadeAmortecimento_17.readFeatures(json_AROreadeAmortecimento_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_AROreadeAmortecimento_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AROreadeAmortecimento_17.addFeatures(features_AROreadeAmortecimento_17);
var lyr_AROreadeAmortecimento_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AROreadeAmortecimento_17, 
                style: style_AROreadeAmortecimento_17,
                popuplayertitle: 'ARO - Área de Amortecimento',
                interactive: true,
                title: '<img src="styles/legend/AROreadeAmortecimento_17.png" /> ARO - Área de Amortecimento'
            });
var format_DelimitaodaBaciadoRibeirodaOna_18 = new ol.format.GeoJSON();
var features_DelimitaodaBaciadoRibeirodaOna_18 = format_DelimitaodaBaciadoRibeirodaOna_18.readFeatures(json_DelimitaodaBaciadoRibeirodaOna_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_DelimitaodaBaciadoRibeirodaOna_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelimitaodaBaciadoRibeirodaOna_18.addFeatures(features_DelimitaodaBaciadoRibeirodaOna_18);
var lyr_DelimitaodaBaciadoRibeirodaOna_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DelimitaodaBaciadoRibeirodaOna_18, 
                style: style_DelimitaodaBaciadoRibeirodaOna_18,
                popuplayertitle: 'Delimitação da Bacia do Ribeirão da Onça',
                interactive: true,
                title: '<img src="styles/legend/DelimitaodaBaciadoRibeirodaOna_18.png" /> Delimitação da Bacia do Ribeirão da Onça'
            });
var format_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC1002006_19 = format_LimitedaBaciadoRioCanoasLeiC1002006_19.readFeatures(json_LimitedaBaciadoRioCanoasLeiC1002006_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19.addFeatures(features_LimitedaBaciadoRioCanoasLeiC1002006_19);
var lyr_LimitedaBaciadoRioCanoasLeiC1002006_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC1002006_19, 
                style: style_LimitedaBaciadoRioCanoasLeiC1002006_19,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 100/2006',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC1002006_19.png" /> Limite da Bacia do Rio Canoas - Lei C. 100/2006'
            });
var format_LimitedaBaciadoRioCanoasLeiC4322024_20 = new ol.format.GeoJSON();
var features_LimitedaBaciadoRioCanoasLeiC4322024_20 = format_LimitedaBaciadoRioCanoasLeiC4322024_20.readFeatures(json_LimitedaBaciadoRioCanoasLeiC4322024_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_20.addFeatures(features_LimitedaBaciadoRioCanoasLeiC4322024_20);
var lyr_LimitedaBaciadoRioCanoasLeiC4322024_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedaBaciadoRioCanoasLeiC4322024_20, 
                style: style_LimitedaBaciadoRioCanoasLeiC4322024_20,
                popuplayertitle: 'Limite da Bacia do Rio Canoas - Lei C. 432/2024',
                interactive: true,
                title: '<img src="styles/legend/LimitedaBaciadoRioCanoasLeiC4322024_20.png" /> Limite da Bacia do Rio Canoas - Lei C. 432/2024'
            });
var format_APP_21 = new ol.format.GeoJSON();
var features_APP_21 = format_APP_21.readFeatures(json_APP_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_APP_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APP_21.addFeatures(features_APP_21);
var lyr_APP_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APP_21, 
                style: style_APP_21,
                popuplayertitle: 'APP',
                interactive: true,
                title: '<img src="styles/legend/APP_21.png" /> APP'
            });
var format_Massasdgua_22 = new ol.format.GeoJSON();
var features_Massasdgua_22 = format_Massasdgua_22.readFeatures(json_Massasdgua_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Massasdgua_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Massasdgua_22.addFeatures(features_Massasdgua_22);
var lyr_Massasdgua_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Massasdgua_22, 
                style: style_Massasdgua_22,
                popuplayertitle: 'Massas d\'água',
                interactive: true,
                title: '<img src="styles/legend/Massasdgua_22.png" /> Massas d\'água'
            });
var format_RiosDuplos_23 = new ol.format.GeoJSON();
var features_RiosDuplos_23 = format_RiosDuplos_23.readFeatures(json_RiosDuplos_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosDuplos_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosDuplos_23.addFeatures(features_RiosDuplos_23);
var lyr_RiosDuplos_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosDuplos_23, 
                style: style_RiosDuplos_23,
                popuplayertitle: 'Rios Duplos',
                interactive: true,
                title: '<img src="styles/legend/RiosDuplos_23.png" /> Rios Duplos'
            });
var format_RiosSimples_24 = new ol.format.GeoJSON();
var features_RiosSimples_24 = format_RiosSimples_24.readFeatures(json_RiosSimples_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RiosSimples_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiosSimples_24.addFeatures(features_RiosSimples_24);
var lyr_RiosSimples_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiosSimples_24, 
                style: style_RiosSimples_24,
                popuplayertitle: 'Rios Simples',
                interactive: true,
                title: '<img src="styles/legend/RiosSimples_24.png" /> Rios Simples'
            });
var format_Nascentes_25 = new ol.format.GeoJSON();
var features_Nascentes_25 = format_Nascentes_25.readFeatures(json_Nascentes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Nascentes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_25.addFeatures(features_Nascentes_25);
var lyr_Nascentes_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nascentes_25, 
                style: style_Nascentes_25,
                popuplayertitle: 'Nascentes',
                interactive: true,
                title: '<img src="styles/legend/Nascentes_25.png" /> Nascentes'
            });
var format_StioSantaRosa_26 = new ol.format.GeoJSON();
var features_StioSantaRosa_26 = format_StioSantaRosa_26.readFeatures(json_StioSantaRosa_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioSantaRosa_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioSantaRosa_26.addFeatures(features_StioSantaRosa_26);
var lyr_StioSantaRosa_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioSantaRosa_26, 
                style: style_StioSantaRosa_26,
                popuplayertitle: 'Sítio Santa Rosa',
                interactive: true,
                title: '<img src="styles/legend/StioSantaRosa_26.png" /> Sítio Santa Rosa'
            });
var format_CondomnioBrilhodoSol_27 = new ol.format.GeoJSON();
var features_CondomnioBrilhodoSol_27 = format_CondomnioBrilhodoSol_27.readFeatures(json_CondomnioBrilhodoSol_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_CondomnioBrilhodoSol_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CondomnioBrilhodoSol_27.addFeatures(features_CondomnioBrilhodoSol_27);
var lyr_CondomnioBrilhodoSol_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CondomnioBrilhodoSol_27, 
                style: style_CondomnioBrilhodoSol_27,
                popuplayertitle: 'Condomínio Brilho do Sol',
                interactive: true,
                title: '<img src="styles/legend/CondomnioBrilhodoSol_27.png" /> Condomínio Brilho do Sol'
            });
var format_Quinho10_28 = new ol.format.GeoJSON();
var features_Quinho10_28 = format_Quinho10_28.readFeatures(json_Quinho10_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quinho10_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quinho10_28.addFeatures(features_Quinho10_28);
var lyr_Quinho10_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quinho10_28, 
                style: style_Quinho10_28,
                popuplayertitle: 'Quinhão 10',
                interactive: true,
                title: '<img src="styles/legend/Quinho10_28.png" /> Quinhão 10'
            });
var format_Quinho9_29 = new ol.format.GeoJSON();
var features_Quinho9_29 = format_Quinho9_29.readFeatures(json_Quinho9_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quinho9_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quinho9_29.addFeatures(features_Quinho9_29);
var lyr_Quinho9_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quinho9_29, 
                style: style_Quinho9_29,
                popuplayertitle: 'Quinhão 9',
                interactive: true,
                title: '<img src="styles/legend/Quinho9_29.png" /> Quinhão 9'
            });
var format_Quinho2_30 = new ol.format.GeoJSON();
var features_Quinho2_30 = format_Quinho2_30.readFeatures(json_Quinho2_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Quinho2_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quinho2_30.addFeatures(features_Quinho2_30);
var lyr_Quinho2_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quinho2_30, 
                style: style_Quinho2_30,
                popuplayertitle: 'Quinhão 2',
                interactive: true,
                title: '<img src="styles/legend/Quinho2_30.png" /> Quinhão 2'
            });
var format_StioCapelinha_31 = new ol.format.GeoJSON();
var features_StioCapelinha_31 = format_StioCapelinha_31.readFeatures(json_StioCapelinha_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioCapelinha_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioCapelinha_31.addFeatures(features_StioCapelinha_31);
var lyr_StioCapelinha_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioCapelinha_31, 
                style: style_StioCapelinha_31,
                popuplayertitle: 'Sítio Capelinha',
                interactive: true,
                title: '<img src="styles/legend/StioCapelinha_31.png" /> Sítio Capelinha'
            });
var format_ParquedosIpsRemanescente_32 = new ol.format.GeoJSON();
var features_ParquedosIpsRemanescente_32 = format_ParquedosIpsRemanescente_32.readFeatures(json_ParquedosIpsRemanescente_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_ParquedosIpsRemanescente_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParquedosIpsRemanescente_32.addFeatures(features_ParquedosIpsRemanescente_32);
var lyr_ParquedosIpsRemanescente_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParquedosIpsRemanescente_32, 
                style: style_ParquedosIpsRemanescente_32,
                popuplayertitle: 'Parque dos Ipês Remanescente',
                interactive: true,
                title: '<img src="styles/legend/ParquedosIpsRemanescente_32.png" /> Parque dos Ipês Remanescente'
            });
var format_RecantoLuaDourada_33 = new ol.format.GeoJSON();
var features_RecantoLuaDourada_33 = format_RecantoLuaDourada_33.readFeatures(json_RecantoLuaDourada_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoLuaDourada_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoLuaDourada_33.addFeatures(features_RecantoLuaDourada_33);
var lyr_RecantoLuaDourada_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoLuaDourada_33, 
                style: style_RecantoLuaDourada_33,
                popuplayertitle: 'Recanto Lua Dourada',
                interactive: true,
                title: '<img src="styles/legend/RecantoLuaDourada_33.png" /> Recanto Lua Dourada'
            });
var format_PortaldosIndais_34 = new ol.format.GeoJSON();
var features_PortaldosIndais_34 = format_PortaldosIndais_34.readFeatures(json_PortaldosIndais_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_PortaldosIndais_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PortaldosIndais_34.addFeatures(features_PortaldosIndais_34);
var lyr_PortaldosIndais_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PortaldosIndais_34, 
                style: style_PortaldosIndais_34,
                popuplayertitle: 'Portal dos Indaiás',
                interactive: true,
                title: '<img src="styles/legend/PortaldosIndais_34.png" /> Portal dos Indaiás'
            });
var format_RecantoEmanuelMatrcula95783_35 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95783_35 = format_RecantoEmanuelMatrcula95783_35.readFeatures(json_RecantoEmanuelMatrcula95783_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95783_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95783_35.addFeatures(features_RecantoEmanuelMatrcula95783_35);
var lyr_RecantoEmanuelMatrcula95783_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95783_35, 
                style: style_RecantoEmanuelMatrcula95783_35,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.783',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95783_35.png" /> Recanto Emanuel - Matrícula 95.783'
            });
var format_RecantoEmanuelMatrcula95782_36 = new ol.format.GeoJSON();
var features_RecantoEmanuelMatrcula95782_36 = format_RecantoEmanuelMatrcula95782_36.readFeatures(json_RecantoEmanuelMatrcula95782_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoEmanuelMatrcula95782_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoEmanuelMatrcula95782_36.addFeatures(features_RecantoEmanuelMatrcula95782_36);
var lyr_RecantoEmanuelMatrcula95782_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoEmanuelMatrcula95782_36, 
                style: style_RecantoEmanuelMatrcula95782_36,
                popuplayertitle: 'Recanto Emanuel - Matrícula 95.782',
                interactive: true,
                title: '<img src="styles/legend/RecantoEmanuelMatrcula95782_36.png" /> Recanto Emanuel - Matrícula 95.782'
            });
var format_RecantodaMata_37 = new ol.format.GeoJSON();
var features_RecantodaMata_37 = format_RecantodaMata_37.readFeatures(json_RecantodaMata_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantodaMata_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantodaMata_37.addFeatures(features_RecantodaMata_37);
var lyr_RecantodaMata_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantodaMata_37, 
                style: style_RecantodaMata_37,
                popuplayertitle: 'Recanto da Mata',
                interactive: true,
                title: '<img src="styles/legend/RecantodaMata_37.png" /> Recanto da Mata'
            });
var format_RecantoPrimavera_38 = new ol.format.GeoJSON();
var features_RecantoPrimavera_38 = format_RecantoPrimavera_38.readFeatures(json_RecantoPrimavera_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RecantoPrimavera_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecantoPrimavera_38.addFeatures(features_RecantoPrimavera_38);
var lyr_RecantoPrimavera_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RecantoPrimavera_38, 
                style: style_RecantoPrimavera_38,
                popuplayertitle: 'Recanto Primavera',
                interactive: true,
                title: '<img src="styles/legend/RecantoPrimavera_38.png" /> Recanto Primavera'
            });
var format_Matrcula106206_39 = new ol.format.GeoJSON();
var features_Matrcula106206_39 = format_Matrcula106206_39.readFeatures(json_Matrcula106206_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Matrcula106206_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matrcula106206_39.addFeatures(features_Matrcula106206_39);
var lyr_Matrcula106206_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matrcula106206_39, 
                style: style_Matrcula106206_39,
                popuplayertitle: 'Matrícula 106.206',
                interactive: true,
                title: '<img src="styles/legend/Matrcula106206_39.png" /> Matrícula 106.206'
            });
var format_StioNossaSenhoraAparecida_40 = new ol.format.GeoJSON();
var features_StioNossaSenhoraAparecida_40 = format_StioNossaSenhoraAparecida_40.readFeatures(json_StioNossaSenhoraAparecida_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_StioNossaSenhoraAparecida_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StioNossaSenhoraAparecida_40.addFeatures(features_StioNossaSenhoraAparecida_40);
var lyr_StioNossaSenhoraAparecida_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StioNossaSenhoraAparecida_40, 
                style: style_StioNossaSenhoraAparecida_40,
                popuplayertitle: 'Sítio Nossa Senhora Aparecida',
                interactive: true,
                title: '<img src="styles/legend/StioNossaSenhoraAparecida_40.png" /> Sítio Nossa Senhora Aparecida'
            });
var format_FazendaBarroPretoeBambus_41 = new ol.format.GeoJSON();
var features_FazendaBarroPretoeBambus_41 = format_FazendaBarroPretoeBambus_41.readFeatures(json_FazendaBarroPretoeBambus_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_FazendaBarroPretoeBambus_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaBarroPretoeBambus_41.addFeatures(features_FazendaBarroPretoeBambus_41);
var lyr_FazendaBarroPretoeBambus_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaBarroPretoeBambus_41, 
                style: style_FazendaBarroPretoeBambus_41,
                popuplayertitle: 'Fazenda Barro Preto e Bambus',
                interactive: true,
                title: '<img src="styles/legend/FazendaBarroPretoeBambus_41.png" /> Fazenda Barro Preto e Bambus'
            });
var format_LoteamentosClandestinos13unid_42 = new ol.format.GeoJSON();
var features_LoteamentosClandestinos13unid_42 = format_LoteamentosClandestinos13unid_42.readFeatures(json_LoteamentosClandestinos13unid_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_LoteamentosClandestinos13unid_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoteamentosClandestinos13unid_42.addFeatures(features_LoteamentosClandestinos13unid_42);
var lyr_LoteamentosClandestinos13unid_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoteamentosClandestinos13unid_42, 
                style: style_LoteamentosClandestinos13unid_42,
                popuplayertitle: 'Loteamentos Clandestinos (13 unid.)',
                interactive: true,
                title: '<img src="styles/legend/LoteamentosClandestinos13unid_42.png" /> Loteamentos Clandestinos (13 unid.)'
            });
var group_MapaPrincipal = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa Principal'});
var group_RelatrioAmbiental = new ol.layer.Group({
                                layers: [lyr_StioSantaRosa_26,lyr_CondomnioBrilhodoSol_27,lyr_Quinho10_28,lyr_Quinho9_29,lyr_Quinho2_30,lyr_StioCapelinha_31,lyr_ParquedosIpsRemanescente_32,lyr_RecantoLuaDourada_33,lyr_PortaldosIndais_34,lyr_RecantoEmanuelMatrcula95783_35,lyr_RecantoEmanuelMatrcula95782_36,lyr_RecantodaMata_37,lyr_RecantoPrimavera_38,lyr_Matrcula106206_39,lyr_StioNossaSenhoraAparecida_40,lyr_FazendaBarroPretoeBambus_41,lyr_LoteamentosClandestinos13unid_42,],
                                fold: 'close',
                                title: 'Relatório Ambiental'});
var group_HidrografiaFBDS2025 = new ol.layer.Group({
                                layers: [lyr_APP_21,lyr_Massasdgua_22,lyr_RiosDuplos_23,lyr_RiosSimples_24,lyr_Nascentes_25,],
                                fold: 'close',
                                title: 'Hidrografia FBDS 2025'});
var group_ZoneamentoAmbientaldaBaciadoRioCanoas = new ol.layer.Group({
                                layers: [lyr_AODAUSFase1_5,lyr_AODAUSFase2_6,lyr_AODBaixaDensidadeNvel1_7,lyr_AODBaixaDensidadeNvel2_8,lyr_AODBaixaDensidadeNvel3_9,lyr_AODreaUrbanaConsolidada_10,lyr_ARAAterros_11,lyr_ARAETELagoas_12,lyr_ARAIncongrunciasemAPP_13,lyr_AROAPP_14,lyr_AROFaixadeCuestas_15,lyr_ARORemanescentesFlorestais_16,lyr_AROreadeAmortecimento_17,lyr_DelimitaodaBaciadoRibeirodaOna_18,lyr_LimitedaBaciadoRioCanoasLeiC1002006_19,lyr_LimitedaBaciadoRioCanoasLeiC4322024_20,],
                                fold: 'close',
                                title: 'Zoneamento Ambiental da Bacia do Rio Canoas'});
var group_Apoio = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Apoio'});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_GoogleSatelliteHybrid_2,lyr_reaurbana_3,lyr_LimiteMunicipal_4,],
                                fold: 'close',
                                title: 'Mapas Base'});
var group_MapadeLocalizao = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mapa de Localização'});

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(false);lyr_reaurbana_3.setVisible(true);lyr_LimiteMunicipal_4.setVisible(true);lyr_AODAUSFase1_5.setVisible(false);lyr_AODAUSFase2_6.setVisible(false);lyr_AODBaixaDensidadeNvel1_7.setVisible(false);lyr_AODBaixaDensidadeNvel2_8.setVisible(false);lyr_AODBaixaDensidadeNvel3_9.setVisible(false);lyr_AODreaUrbanaConsolidada_10.setVisible(false);lyr_ARAAterros_11.setVisible(false);lyr_ARAETELagoas_12.setVisible(false);lyr_ARAIncongrunciasemAPP_13.setVisible(false);lyr_AROAPP_14.setVisible(false);lyr_AROFaixadeCuestas_15.setVisible(false);lyr_ARORemanescentesFlorestais_16.setVisible(false);lyr_AROreadeAmortecimento_17.setVisible(false);lyr_DelimitaodaBaciadoRibeirodaOna_18.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.setVisible(false);lyr_LimitedaBaciadoRioCanoasLeiC4322024_20.setVisible(false);lyr_APP_21.setVisible(false);lyr_Massasdgua_22.setVisible(false);lyr_RiosDuplos_23.setVisible(false);lyr_RiosSimples_24.setVisible(false);lyr_Nascentes_25.setVisible(false);lyr_StioSantaRosa_26.setVisible(false);lyr_CondomnioBrilhodoSol_27.setVisible(false);lyr_Quinho10_28.setVisible(false);lyr_Quinho9_29.setVisible(false);lyr_Quinho2_30.setVisible(false);lyr_StioCapelinha_31.setVisible(false);lyr_ParquedosIpsRemanescente_32.setVisible(false);lyr_RecantoLuaDourada_33.setVisible(false);lyr_PortaldosIndais_34.setVisible(false);lyr_RecantoEmanuelMatrcula95783_35.setVisible(false);lyr_RecantoEmanuelMatrcula95782_36.setVisible(false);lyr_RecantodaMata_37.setVisible(false);lyr_RecantoPrimavera_38.setVisible(false);lyr_Matrcula106206_39.setVisible(false);lyr_StioNossaSenhoraAparecida_40.setVisible(false);lyr_FazendaBarroPretoeBambus_41.setVisible(false);lyr_LoteamentosClandestinos13unid_42.setVisible(false);
var layersList = [group_MapasBase,group_ZoneamentoAmbientaldaBaciadoRioCanoas,group_HidrografiaFBDS2025,group_RelatrioAmbiental];
lyr_reaurbana_3.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'CLASSE_USO': 'CLASSE_USO', 'AREA_HA': 'AREA_HA', 'AREA_KM2': 'AREA_KM2', });
lyr_LimiteMunicipal_4.set('fieldAliases', {'fid': 'fid', 'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_AODAUSFase1_5.set('fieldAliases', {'fid': 'fid', 'Classe': 'Subclasse', 'SUM_area': 'Área (m²)', 'FIRST_AI': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODAUSFase2_6.set('fieldAliases', {'fid': 'fid', 'Classe': 'Classe', 'SUM_area': 'SUM_area', 'FIRST_AI': 'FIRST_AI', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel1_7.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel2_8.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODBaixaDensidadeNvel3_9.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AODreaUrbanaConsolidada_10.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAAterros_11.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAETELagoas_12.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARAIncongrunciasemAPP_13.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROAPP_14.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROFaixadeCuestas_15.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_ARORemanescentesFlorestais_16.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_AROreadeAmortecimento_17.set('fieldAliases', {'fid': 'fid', 'Subclasse': 'Subclasse', 'Área (m²)': 'Área (m²)', 'Classe': 'Classe', 'desc_subclasse': 'Descrição - Subclasse', 'desc_classe': 'Descrição - Classe', });
lyr_DelimitaodaBaciadoRibeirodaOna_18.set('fieldAliases', {'fid': 'fid', 'Name': 'Nome', 'area_km2': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Área (km²)': 'Área (km²)', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_20.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'area': 'area', 'Id_2': 'Id_2', 'Área (km²)': 'Área (km²)', });
lyr_APP_21.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'APP_M': 'APP (m)', 'AREA_HA': 'ÁREA (ha)', });
lyr_Massasdgua_22.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'NATUREZA': 'NATUREZA', 'RIO': 'RIO', 'SETOR': 'SETOR', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosDuplos_23.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'AREA_HA': 'ÁREA (ha)', });
lyr_RiosSimples_24.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', 'COMP_KM': 'EXTENSÃO (km)', });
lyr_Nascentes_25.set('fieldAliases', {'fid': 'fid', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'CLASSE HIDROLÓGICA', });
lyr_StioSantaRosa_26.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_CondomnioBrilhodoSol_27.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Quinho10_28.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Quinho9_29.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Quinho2_30.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioCapelinha_31.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_ParquedosIpsRemanescente_32.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoLuaDourada_33.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_PortaldosIndais_34.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95783_35.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoEmanuelMatrcula95782_36.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantodaMata_37.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_RecantoPrimavera_38.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_Matrcula106206_39.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_StioNossaSenhoraAparecida_40.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_FazendaBarroPretoeBambus_41.set('fieldAliases', {'fid': 'fid', 'nome': 'Nome', 'area': 'Área (m²)', 'multa': 'Multa', 'ufmf': 'UFMF', });
lyr_LoteamentosClandestinos13unid_42.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'area': 'area', 'multa': 'multa', 'ufmf': 'ufmf', });
lyr_reaurbana_3.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'CLASSE_USO': 'TextEdit', 'AREA_HA': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_LimiteMunicipal_4.set('fieldImages', {'fid': 'TextEdit', 'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_AODAUSFase1_5.set('fieldImages', {'fid': 'TextEdit', 'Classe': 'TextEdit', 'SUM_area': 'TextEdit', 'FIRST_AI': 'TextEdit', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODAUSFase2_6.set('fieldImages', {'fid': '', 'Classe': '', 'SUM_area': '', 'FIRST_AI': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel1_7.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel2_8.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODBaixaDensidadeNvel3_9.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AODreaUrbanaConsolidada_10.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAAterros_11.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAETELagoas_12.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARAIncongrunciasemAPP_13.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROAPP_14.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROFaixadeCuestas_15.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_ARORemanescentesFlorestais_16.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_AROreadeAmortecimento_17.set('fieldImages', {'fid': '', 'Subclasse': '', 'Área (m²)': '', 'Classe': '', 'desc_subclasse': '', 'desc_classe': '', });
lyr_DelimitaodaBaciadoRibeirodaOna_18.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldImages', {'fid': '', 'Id': '', 'Área (km²)': '', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_20.set('fieldImages', {'fid': '', 'Id': '', 'area': '', 'Id_2': '', 'Área (km²)': '', });
lyr_APP_21.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'APP_M': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_Massasdgua_22.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'NATUREZA': 'TextEdit', 'RIO': 'TextEdit', 'SETOR': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosDuplos_23.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_RiosSimples_24.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', 'COMP_KM': 'TextEdit', });
lyr_Nascentes_25.set('fieldImages', {'fid': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'Range', 'HIDRO': 'TextEdit', });
lyr_StioSantaRosa_26.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_CondomnioBrilhodoSol_27.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Quinho10_28.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Quinho9_29.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Quinho2_30.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioCapelinha_31.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_ParquedosIpsRemanescente_32.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoLuaDourada_33.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_PortaldosIndais_34.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95783_35.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoEmanuelMatrcula95782_36.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantodaMata_37.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_RecantoPrimavera_38.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_Matrcula106206_39.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_StioNossaSenhoraAparecida_40.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_FazendaBarroPretoeBambus_41.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_LoteamentosClandestinos13unid_42.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'area': 'TextEdit', 'multa': 'TextEdit', 'ufmf': 'TextEdit', });
lyr_reaurbana_3.set('fieldLabels', {'fid': 'no label', 'GEOCODIGO': 'no label', 'MUNICIPIO': 'no label', 'UF': 'no label', 'CD_UF': 'no label', 'CLASSE_USO': 'no label', 'AREA_HA': 'no label', 'AREA_KM2': 'no label', });
lyr_LimiteMunicipal_4.set('fieldLabels', {'fid': 'no label', 'CD_MUN': 'no label', 'NM_MUN': 'no label', 'CD_RGI': 'no label', 'NM_RGI': 'no label', 'CD_RGINT': 'no label', 'NM_RGINT': 'no label', 'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'CD_REGIA': 'no label', 'NM_REGIA': 'no label', 'SIGLA_RG': 'no label', 'CD_CONCU': 'no label', 'NM_CONCU': 'no label', 'AREA_KM2': 'no label', });
lyr_AODAUSFase1_5.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODAUSFase2_6.set('fieldLabels', {'fid': 'hidden field', 'Classe': 'inline label - visible with data', 'SUM_area': 'inline label - visible with data', 'FIRST_AI': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel1_7.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel2_8.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODBaixaDensidadeNvel3_9.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AODreaUrbanaConsolidada_10.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAAterros_11.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAETELagoas_12.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARAIncongrunciasemAPP_13.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROAPP_14.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROFaixadeCuestas_15.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_ARORemanescentesFlorestais_16.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_AROreadeAmortecimento_17.set('fieldLabels', {'fid': 'hidden field', 'Subclasse': 'inline label - visible with data', 'Área (m²)': 'inline label - visible with data', 'Classe': 'inline label - visible with data', 'desc_subclasse': 'inline label - visible with data', 'desc_classe': 'inline label - visible with data', });
lyr_DelimitaodaBaciadoRibeirodaOna_18.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - visible with data', 'area_km2': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC1002006_19.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_LimitedaBaciadoRioCanoasLeiC4322024_20.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'area': 'hidden field', 'Id_2': 'hidden field', 'Área (km²)': 'inline label - visible with data', });
lyr_APP_21.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'APP_M': 'inline label - visible with data', 'AREA_HA': 'inline label - always visible', });
lyr_Massasdgua_22.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'NATUREZA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'SETOR': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosDuplos_23.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RiosSimples_24.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'COMP_KM': 'inline label - visible with data', });
lyr_Nascentes_25.set('fieldLabels', {'fid': 'hidden field', 'GEOCODIGO': 'hidden field', 'MUNICIPIO': 'hidden field', 'UF': 'hidden field', 'CD_UF': 'hidden field', 'HIDRO': 'inline label - visible with data', });
lyr_StioSantaRosa_26.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_CondomnioBrilhodoSol_27.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Quinho10_28.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Quinho9_29.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Quinho2_30.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioCapelinha_31.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_ParquedosIpsRemanescente_32.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoLuaDourada_33.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_PortaldosIndais_34.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95783_35.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoEmanuelMatrcula95782_36.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantodaMata_37.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_RecantoPrimavera_38.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_Matrcula106206_39.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_StioNossaSenhoraAparecida_40.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_FazendaBarroPretoeBambus_41.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos13unid_42.set('fieldLabels', {'fid': 'hidden field', 'nome': 'inline label - visible with data', 'area': 'inline label - visible with data', 'multa': 'inline label - visible with data', 'ufmf': 'inline label - visible with data', });
lyr_LoteamentosClandestinos13unid_42.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});