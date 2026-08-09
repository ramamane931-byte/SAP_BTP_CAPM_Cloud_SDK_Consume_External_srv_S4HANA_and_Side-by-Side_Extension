namespace capm_s4h_extrnl_01.ramdas;

using { NorthWind_metadata as nw } from './external/NorthWind_metadata';

service ExternalService @(path: 'ExternalService') {
    
    entity ExternalProducts as projection on nw.Products;

}
