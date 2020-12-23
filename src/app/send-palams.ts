export const CameraParams = {
  "LucidCameraParam": {
    "ConfidenceThresholdEnable": "1",
    "ConfidenceThresholdMin": "500",
    "ROIParam": {
      "ROI_MinX": "-5000",
      "ROI_MinY": "-5000",
      "ROI_MinZ": "-5000",
      "ROI_MaxX": "5000",
      "ROI_MaxY": "5000",
      "ROI_MaxZ": "5000"
    }
  }
};

export const BoxRecogParams = {
  "BoxRecogParam": {
    "BoxParam": {
      "Boxthickness": "18",
      "BoxOutWidth": "335",
      "BoxOutHeight": "670",
      "ModelStep": "2",
      "ModelBoxDepth": "15",
      "zDirection": "-1"
    },
    "SceneLeafSize": "1",
    "PlaneNormalAngle": "15",
    "PlaneDistanceThreshold": "15",
    "EdgePointDelete_Step": "3",
    "LineDistanceThreshold": "2",
    "LineIntegrationDistance": "3",
    "BoxEdgeFormedAngleThreshold": "10",
    "BoxLengthErrorThreshold": "15",
    "BoxPointRadius": "5",
    "BoxFramePointRate": "0.5",
    "MaxBoxRecogNum": "4",
    "VoxelPointNumThreshold": "10",
    "VoxelXSize": "50",
    "VoxelYSize": "50",
    "VoxelZSize": "50",
    "ICPParam": {
      "icp_maxIterations": "40",
      "icp_euclideanFitnessEpsilon": "0.001",
      "icp_thresScore": "25"
    }
  }
};