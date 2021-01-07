/*
各パラメータ項目の型設定
*/
interface BASE_TYPE{
  value: number;
  name1: string;
  name2?: string;
  types?: string;
}

/*
初期値設定：パラメーターサービス用
*/

//カメラ
export interface CAMERA{
  id: number;
  type: string;
  ConfidenceThresholdEnable: BASE_TYPE;
  ConfidenceThresholdMin: BASE_TYPE;
  ROIParam: BASE_TYPE[];
}

//箱認識
export interface BOX_RECOGNIZE{
  id?: number;
  type?: BASE_TYPE;
  BoxParam: BASE_TYPE[];
  SceneLeafSize: BASE_TYPE;
  PlaneNormalAngle: BASE_TYPE;
  PlaneDistanceThreshold: BASE_TYPE;
  EdgePointDelete_Step: BASE_TYPE;
  LineDistanceThreshold: BASE_TYPE;
  BoxEdgeFormedAngleThreshold: BASE_TYPE;
  BoxLengthErrorThreshold: BASE_TYPE;
  BoxPointRadius: BASE_TYPE;
  BoxFramePointRate: BASE_TYPE;
  MaxBoxRecogNum: BASE_TYPE;
  VoxelPointNumThreshold: BASE_TYPE;
  VoxelXSize: BASE_TYPE;
  VoxelYSize: BASE_TYPE;
  VoxelZSize: BASE_TYPE;
  ICPParam:BASE_TYPE[]; 
}


/*
オブジェクトの型指定
*/
//カメラ
export interface LUCID{
  ConfidenceThresholdEnable: number;
  ConfidenceThresholdMin: number;
  ROIParam:{
    ROI_MinX: number;
    ROI_MinY: number;
    ROI_MinZ: number;
    ROI_MaxX: number;
    ROI_MaxY: number;
    ROI_MaxZ: number;
  }
}
//箱認識
export interface RECG_PARAMS {
  BoxParam: {
    Boxthickness: number;
    BoxOutWidth: number;
    BoxOutHeight: number;
    ModelStep: number;
    ModelBoxDepth: number;
    zDirection: number;
    }
    SceneLeafSize: number;
    PlaneNormalAngle: number;
    PlaneDistanceThreshold: number;
    EdgePointDelete_Step: number;
    LineDistanceThreshold: number;
    BoxEdgeFormedAngleThreshold: number;
    BoxLengthErrorThreshold: number;
    BoxPointRadius: number;
    BoxFramePointRate: number;
    MaxBoxRecogNum: number;
    VoxelPointNumThreshold: number;
    VoxelXSize: number;
    VoxelYSize: number;
    VoxelZSize: number;
    ICPParam: {
      icp_maxIterations: number;
      icp_euclideanFitnessEpsilon: number;
      icp_thresScore: number;
    }
}