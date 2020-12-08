input.onButtonPressed(Button.A, function () {
    devices.tellCameraTo(MesCameraEvent.LaunchPhotoMode)
    basic.pause(3000)
    devices.tellCameraTo(MesCameraEvent.TakePhoto)
})
