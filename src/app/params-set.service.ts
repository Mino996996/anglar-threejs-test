import { Injectable } from '@angular/core';
import { CAMERA, BOX_RECOGNIZE} from './modeltypes';

@Injectable({
  providedIn: 'root'
})
export class ParamsSetService {

  camera1: CAMERA = {
    id: 203700055,
    type: "lucid",
    ConfidenceThresholdEnable: { value: 1, name1: "ConfidenceThresholdEnable", types: "int" },
    ConfidenceThresholdMin: { value: 500, name1: "ConfidenceThresholdMin", types: "int" },
    ROIParam: [
      { value: -5000, name1: "ROI_MinX", types: "int" },
      { value: -5000, name1: "ROI_MinY", types: "int" },
      { value: -5000, name1: "ROI_MinZ", types: "int" },
      { value: 5000, name1: "ROI_MaxX", types: "int" },
      { value: 5000, name1: "ROI_MaxY", types: "int" },
      { value: 5000, name1: "ROI_MaxZ", types: "int" }
    ]
  };

  recogParams: BOX_RECOGNIZE = {
    BoxParam: [
      { value: 18, name1: "Boxthickness", name2: "フチの厚み", types: "float" },
      { value: 335, name1: "BoxOutWidth", name2: "箱の長さ：横-X軸方向", types: "float" },
      { value: 670, name1: "BoxOutHeight", name2: "箱の長さ：縦-Y軸方向", types: "float" },
      { value: 2, name1: "ModelStep", name2: "モデル点群の点間距離", types: "float" },
      { value: 15, name1: "ModelBoxDepth", name2: "箱の長さ：高さ-Z軸方向", types: "float" },
      { value: -1, name1: "zDirection", name2: "Z軸方向(1：上向き、-1：下向き)", types: "int" }
    ],
    SceneLeafSize: { value: 1, name1: "SceneLeafSize", name2: "入力点群のダウンサンプリングを行う時の点間距離", types: "float" },
    PlaneNormalAngle: { value: 15, name1: "PlaneNormalAngle", name2: "平面検出の時の傾きの許容範囲", types: "float" },
    PlaneDistanceThreshold: { value: 15, name1: "PlaneDistanceThreshold", name2: "平面検出の時に使用する平面からの距離（この距離以内の点群のみで平面を検出する）", types: "float" },
    EdgePointDelete_Step: { value: 3, name1: "EdgePointDelete_Step", name2: "エッジ画像を作成する時の分解能[mm/pixel]（入力点群の点間距離より大きい値を設定してください）", types: "float" },
    LineDistanceThreshold: { value: 2, name1: "LineDistanceThreshold", name2: "直線検出の時に使用する直線からの距離（この距離以内の点群のみで直線を検出する）", types: "float" },
    BoxEdgeFormedAngleThreshold: { value: 10, name1: "BoxEdgeFormedAngleThreshold", name2: "箱検出で使用する直線同士の角度のしきい値（このしきい値まで角度の誤差を許容する）", types: "float" },
    BoxLengthErrorThreshold: { value: 15, name1: "BoxLengthErrorThreshold", name2: "箱検出で使用する箱のサイズのしきい値（このしきい値までサイズの誤差を許容する）", types: "float" },
    BoxPointRadius: { value: 5, name1: "BoxPointRadius", name2: "箱検出の時のフレーム点群有無判定時で使用する直線からの距離", types: "float" },
    BoxFramePointRate: { value: 0.5, name1: "BoxFramePointRate", name2: "/箱検出の時のフレーム点群有無判定時で使用する点群しきい値割合（箱として検出したフレーム部分の点群がこのしきい値割合以上の箱のみ検出する）", types: "float" },
    MaxBoxRecogNum: { value: 4, name1: "MaxBoxRecogNum", name2: "箱検出する最大数", types: "int" },
    VoxelPointNumThreshold: { value: 10, name1: "VoxelPointNumThreshold", name2: "ボクセル内に点群ありと判定するための点数のしきい値", types: "int" },
    VoxelXSize: { value: 50, name1: "VoxelXSize", name2: "３次元点群をボクセル化するときのX方向のサイズ", types: "float" },
    VoxelYSize: { value: 50, name1: "VoxelYSize", name2: "３次元点群をボクセル化するときのY方向のサイズ", types: "float" },
    VoxelZSize: { value: 50, name1: "VoxelZSize", name2: "３次元点群をボクセル化するときのZ方向のサイズ", types: "float" },
    ICPParam: [
      { value: 40, name1: "icp_maxIterations", name2: "ICPの最大繰り返し数", types: "int" },
      { value: 0.001, name1: "icp_euclideanFitnessEpsilon", name2: "ICPを終了する条件である入力点群とモデル点群の誤差しきい値", types: "float" },
      { value: 25, name1: "icp_thresScore", name2: "ICPのスコア（平均誤差）のしきい値（このしきい値以上のスコアの場合はICPで検出不可とする）", types: "float" }
    ]
  };

  recogParamsInfo: string[] = [
    "フチの厚み",
    "箱の長さ：横-X軸方向",
    "箱の長さ：縦-Y軸方向",
    "モデル点群の点間距離",
    "箱の長さ：高さ-Z軸方向",
    "Z軸方向(1：上向き、-1：下向き)",
    "入力点群のダウンサンプリングを行う時の点間距離",
    "平面検出の時の傾きの許容範囲",
    "平面検出の時に使用する平面からの距離（この距離以内の点群のみで平面を検出する）",
    "エッジ画像を作成する時の分解能[mm/pixel]（入力点群の点間距離より大きい値を設定してください）",
    "直線検出の時に使用する直線からの距離（この距離以内の点群のみで直線を検出する）",
    "箱検出で使用する直線同士の角度のしきい値（このしきい値まで角度の誤差を許容する）",
    "箱検出で使用する箱のサイズのしきい値（このしきい値までサイズの誤差を許容する）",
    "箱検出の時のフレーム点群有無判定時で使用する直線からの距離",
    "/箱検出の時のフレーム点群有無判定時で使用する点群しきい値割合（箱として検出したフレーム部分の点群がこのしきい値割合以上の箱のみ検出する）",
    "箱検出する最大数",
    "ボクセル内に点群ありと判定するための点数のしきい値",
    "３次元点群をボクセル化するときのX方向のサイズ",
    "３次元点群をボクセル化するときのY方向のサイズ",
    "３次元点群をボクセル化するときのZ方向のサイズ",
    "ICPの最大繰り返し数",
    "ICPを終了する条件である入力点群とモデル点群の誤差しきい値",
    "ICPのスコア（平均誤差）のしきい値（このしきい値以上のスコアの場合はICPで検出不可とする）"
  ];

  constructor() { }
}

