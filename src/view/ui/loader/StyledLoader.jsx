import Styled from 'styled-components';

const StyledLoader = Styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;

  #circularG{
    position:relative;
    width:58px;
    height:58px;
    top:  50%;
    left:50%;
    transform: translate(-50%, -50%);
  }

  .circularG{
    position:absolute;
    background-color:rgba(24,96,191,0.98);
    width:14px;
    height:14px;
    border-radius:9px;
      -o-border-radius:9px;
      -ms-border-radius:9px;
      -webkit-border-radius:9px;
      -moz-border-radius:9px;
    animation-name:bounce_circularG;
      -o-animation-name:bounce_circularG;
      -ms-animation-name:bounce_circularG;
      -webkit-animation-name:bounce_circularG;
      -moz-animation-name:bounce_circularG;
    animation-duration:0.428s;
      -o-animation-duration:0.428s;
      -ms-animation-duration:0.428s;
      -webkit-animation-duration:0.428s;
      -moz-animation-duration:0.428s;
    animation-iteration-count:infinite;
      -o-animation-iteration-count:infinite;
      -ms-animation-iteration-count:infinite;
      -webkit-animation-iteration-count:infinite;
      -moz-animation-iteration-count:infinite;
    animation-direction:normal;
      -o-animation-direction:normal;
      -ms-animation-direction:normal;
      -webkit-animation-direction:normal;
      -moz-animation-direction:normal;
  }

  #circularG_1{
    left:0;
    top:23px;
    animation-delay:0.158s;
      -o-animation-delay:0.158s;
      -ms-animation-delay:0.158s;
      -webkit-animation-delay:0.158s;
      -moz-animation-delay:0.158s;
  }

  #circularG_2{
    left:6px;
    top:6px;
    animation-delay:0.214s;
      -o-animation-delay:0.214s;
      -ms-animation-delay:0.214s;
      -webkit-animation-delay:0.214s;
      -moz-animation-delay:0.214s;
  }

  #circularG_3{
    top:0;
    left:23px;
    animation-delay:0.27s;
      -o-animation-delay:0.27s;
      -ms-animation-delay:0.27s;
      -webkit-animation-delay:0.27s;
      -moz-animation-delay:0.27s;
  }

  #circularG_4{
    right:6px;
    top:6px;
    animation-delay:0.326s;
      -o-animation-delay:0.326s;
      -ms-animation-delay:0.326s;
      -webkit-animation-delay:0.326s;
      -moz-animation-delay:0.326s;
  }

  #circularG_5{
    right:0;
    top:23px;
    animation-delay:0.382s;
      -o-animation-delay:0.382s;
      -ms-animation-delay:0.382s;
      -webkit-animation-delay:0.382s;
      -moz-animation-delay:0.382s;
  }

  #circularG_6{
    right:6px;
    bottom:6px;
    animation-delay:0.428s;
      -o-animation-delay:0.428s;
      -ms-animation-delay:0.428s;
      -webkit-animation-delay:0.428s;
      -moz-animation-delay:0.428s;
  }

  #circularG_7{
    left:23px;
    bottom:0;
    animation-delay:0.484s;
      -o-animation-delay:0.484s;
      -ms-animation-delay:0.484s;
      -webkit-animation-delay:0.484s;
      -moz-animation-delay:0.484s;
  }

  #circularG_8{
    left:6px;
    bottom:6px;
    animation-delay:0.54s;
      -o-animation-delay:0.54s;
      -ms-animation-delay:0.54s;
      -webkit-animation-delay:0.54s;
      -moz-animation-delay:0.54s;
  }



  @keyframes bounce_circularG{
    0%{
      transform:scale(1);
    }

    100%{
      transform:scale(.3);
    }
  }

  @-o-keyframes bounce_circularG{
    0%{
      -o-transform:scale(1);
    }

    100%{
      -o-transform:scale(.3);
    }
  }

  @-ms-keyframes bounce_circularG{
    0%{
      -ms-transform:scale(1);
    }

    100%{
      -ms-transform:scale(.3);
    }
  }

  @-webkit-keyframes bounce_circularG{
    0%{
      -webkit-transform:scale(1);
    }

    100%{
      -webkit-transform:scale(.3);
    }
  }

  @-moz-keyframes bounce_circularG{
    0%{
      -moz-transform:scale(1);
    }

    100%{
      -moz-transform:scale(.3);
    }
  }
`;

export default StyledLoader;
