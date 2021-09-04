  // 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/student.mp4'
  // 'https://aictb.oss-cn-shanghai.aliyuncs.com/website/teacher.mp4' 

  $('#videoClick').on('click', function () {
    $('#Help').append(` <video
    class="player"
    autoplay
    controls="true"
    style="width: 1200px;height: 500px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);"
    loop
    src="https://aictb.oss-cn-shanghai.aliyuncs.com/website/student.mp4"
  ></video>`)
  });