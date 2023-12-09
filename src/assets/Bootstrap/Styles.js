import { StyleSheet } from "react-native";

export default StyleSheet.create({


shadowWhite : {

    textShadowColor: 'white', // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // Shadow offset
    textShadowRadius: 4,

},
  hotBorder :{
    borderColor : "lightpink",
    borderWidth : 1,
    borderStyle : 'solid'
  }
,  lineThrough: {
    "textDecorationLine": 'line-through'
  },
  justifyAround: {
    "justifyContent": 'space-around'
  },
  justifyEvenly: {
    "justifyContent": 'space-evenly'
  },
  justifyBetween: {
    "justifyContent": "space-between"
  },
  border: {
    'borderWidth': 1,
    'borderStyle': 'solid'
  },
  alignStart: {
    'alignItems': 'flex-start'
  },
  JustifyStart: {
    "justifyContent": 'flex-start'
  },
  JustifyEnd: {
    "justifyContent": 'flex-end'
  },
  alignEnd: {
    "alignItems": 'flex-end'
  },
  borderBlack: {
    'borderColor': 'black'
  },
  borderGrey: {
    'borderColor': 'grey'
  },
  JustifyCenter: {
    "justifyContent": "center"
  },
  alignCenter: {
    "alignItems": 'center'
  }
  , fwNormal: {
    fontWeight: 'normal', // Bootstrap normal font weight
  },
  fwBold: {
    fontWeight: 'bold', // Bootstrap bold font weight
  },
  fwLight: {
    fontWeight: '300', // Bootstrap light font weight
  },
  fwLighter: {
    fontWeight: 'lighter', // Bootstrap lighter font weight
  },
  fwBolder: {
    fontWeight: 'bolder', // Bootstrap bolder font weight
  },
  textStart: {
    textAlign: 'left', // Bootstrap text-align start (left)
  },
  textCenter: {
    textAlign: 'center', // Bootstrap text-align center
  },
  textEnd: {
    textAlign: 'right', // Bootstrap text-align end (right)
  },
  textJustify: {
    textAlign: 'justify', // Bootstrap text-align justify
  },
  fs1: {
    fontSize: 10, // Bootstrap font size 1
  },
  fs2: {
    fontSize: 12, // Bootstrap font size 2
  },
  fs2Half: {
    fontSize: 13, // Bootstrap font size 3
  },
  fs3: {
    fontSize: 14, // Bootstrap font size 3
  },
  fs4: {
    fontSize: 16, // Bootstrap font size 4
  },
  fs5: {
    fontSize: 18, // Bootstrap font size 5
  },
  fs6: {
    fontSize: 20, // Bootstrap font size 6
  },
  fs7: {
    fontSize: 24, // Bootstrap font size 7
  },
  fs8: {
    fontSize: 30, // Bootstrap font size 8
  },
  fs9: {
    fontSize: 36, // Bootstrap font size 9
  },

  col: {
    flex: 1,
  },
  colAuto: {
    flex: 0,
    alignSelf: 'auto',
  },

  colHalf: {
    flex: 1 / 12,
  },
  col1: {
    flex: 1 / 6,
  },
  col2: {
    flex: 2 / 6,
  },
  col2Half: {
    flex: 2 / 5,
  },
  col3: {
    flex: 3 / 6,
  },
  col3Half: {
    flex: 3 / 5,
  },
  col4: {
    flex: 4 / 6,
  },
  col5: {
    flex: 5 / 6,
  },
  col6: {
    flex: 1,
  },
  w10: {
    flex: 0,
    width: '10%',
  },
  w15: {
    flex: 0,
    width: '15%',
  },
  w20: {
    flex: 0,
    width: '20%',
  },
  w25: {
    flex: 0,
    width: '25%',
  },
  w30: {
    flex: 0,
    width: '30%',
  },
  w40: {
    flex: 0,
    width: '40%',
  },
  w50: {
    flex: 0,
    width: '50%',
  },
  w60: {
    flex: 0,
    width: '60%',
  },
  w65: {
    flex: 0,
    width: '65%',
  },
  w70: {
    flex: 0,
    width: '70%',
  },
  w75: {
    flex: 0,
    width: '75%',
  },
  w80: {
    flex: 0,
    width: '80%',
  },
  w85: {
    flex: 0,
    width: '85%',
  },
  w90: {
    flex: 0,
    width: '90%',
  },
  w100: {
    flex: 0,
    width: '100%',
  },
  h40: { "height": "40%" },
  h50: { "height": "50%" },
  h55: { "height": "55%" },
  h60: { "height": "60%" },
  h65: { "height": "65%" },
  h70: { "height": "70%" },
  h75: { "height": "75%" },
  h80: { "height": "80%" },
  h85: { "height": "85%" },
  h90: { "height": "90%" },
  h95: { "height": "95%" },
  h100: { "height": "100%" },
  w100: { "width": '100%' },
  wauto: { "width": 'auto' },
  hauto: { "height": 'auto' },
  w0: { "width": '0' },
  h0: { "height": '0' },
  
  absolute: { "position": 'absolute' },
  relative: { "position": 'relative' },
  bottom0: { 'bottom': 0 }, bottom1: { 'bottom': 5 }, bottom2: { 'bottom': 10 }, bottom3: { 'bottom': 20 },
  top0: { 'top': 0 },
  left0: { 'left': 0 },
  right0: { 'right': 0 },
  flexrow: {
    "display": "flex",
    "flexDirection": 'row'
  },
  textPrimary: {
    color: '#0d6efd', // Bootstrap primary text color
  },
  textSecondary: {
    color: '#6c757d', // Bootstrap secondary text color
  },
  textSuccess: {
    color: '#198754', // Bootstrap success text color
  },
  textDanger: {
    color: '#dc3545', // Bootstrap danger text color
  },
  textWarning: {
    color: '#ffc107', // Bootstrap warning text color
  },
  textInfo: {
    color: '#0dcaf0', // Bootstrap info text color
  },
  textLight: {
    color: '#f8f9fa', // Bootstrap light text color
  },
  textDark: {
    color: '#212529', // Bootstrap dark text color
  },
  textBody: {
    color: '#212529', // Bootstrap body text color
  },
  textMuted: {
    color: '#6c757d', // Bootstrap muted text color
  },
  textWhite: {
    color: '#fff', // Bootstrap white text color
  },
  textBlack: {
    color: '#000', // Bootstrap black text color
  },
  btnPrimary: {
    backgroundColor: '#0d6efd', // Bootstrap primary button background color
  },
  btnSecondary: {
    backgroundColor: '#6c757d', // Bootstrap secondary button background color
  },
  btnSuccess: {
    backgroundColor: '#198754', // Bootstrap success button background color
  },
  btnDanger: {
    backgroundColor: '#dc3545', // Bootstrap danger button background color
  },
  btnWarning: {
    backgroundColor: '#ffc107', // Bootstrap warning button background color
  },
  btnInfo: {
    backgroundColor: '#0dcaf0', // Bootstrap info button background color
  },
  btnLight: {
    backgroundColor: '#f8f9fa', // Bootstrap light button background color
  },
  btnWhite: {
    backgroundColor: 'white', // Bootstrap light button background color
  },
  btnDark: {
    backgroundColor: '#212529', // Bootstrap dark button background color
  },
  btnLink: {
    backgroundColor: 'transparent', // Bootstrap link button background color
  },
  p0: {
    padding: 0,
  },
  p1: {
    padding: 4,
  },
  p2: {
    padding: 8,
  },
  p3: {
    padding: 12,
  },
  p4: {
    padding: 16,
  },
  p5: {
    padding: 20,
  },
  pt0: {
    paddingTop: 0,
  },
  pt1: {
    paddingTop: 4,
  },
  pt2: {
    paddingTop: 8,
  },
  pt3: {
    paddingTop: 12,
  },
  pt4: {
    paddingTop: 16,
  },
  pt5: {
    paddingTop: 20,
  },
  pb0: {
    paddingBottom: 0,
  },
  pb1: {
    paddingBottom: 4,
  },
  pb2: {
    paddingBottom: 8,
  },
  pb3: {
    paddingBottom: 12,
  },
  pb4: {
    paddingBottom: 16,
  },
  pb5: {
    paddingBottom: 20,
  },
  pl0: {
    paddingLeft: 0,
  },
  pl1: {
    paddingLeft: 4,
  },
  pl2: {
    paddingLeft: 8,
  },
  pl3: {
    paddingLeft: 12,
  },
  pl4: {
    paddingLeft: 16,
  },
  pl5: {
    paddingLeft: 20,
  },
  pr0: {
    paddingRight: 0,
  },
  pr1: {
    paddingRight: 4,
  },
  pr2: {
    paddingRight: 8,
  },
  pr3: {
    paddingRight: 12,
  },
  pr4: {
    paddingRight: 16,
  },
  pr5: {
    paddingRight: 20,
  },
  px0: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  px1: {
    paddingLeft: 4,
    paddingRight: 4,
  },
  px2: {
    paddingLeft: 8,
    paddingRight: 8,
  },
  px3: {
    paddingLeft: 12,
    paddingRight: 12,
  },
  px4: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  px5: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  py0: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  py1: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  py2: {
    paddingTop: 8,
    paddingBottom: 8,
  },
  py3: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  py4: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  py5: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  mlauto: {
    marginLeft: 'auto'
  },
  mrauto: {
    marginRight: 'auto'
  },
  m0: {
    margin: 0,
  },
  m1: {
    margin: 4,
  },
  m2: {
    margin: 8,
  },
  m3: {
    margin: 12,
  },
  m4: {
    margin: 16,
  },
  m5: {
    margin: 20,
  },
  mt0: {
    marginTop: 0,
  },
  mtHalf: {
    marginTop: 2,
  },
  mt1: {
    marginTop: 4,
  },
  mt2: {
    marginTop: 8,
  },
  mt3: {
    marginTop: 12,
  },
  mt4: {
    marginTop: 16,
  },
  mt5: {
    marginTop: 20,
  },
  mb0: {
    marginBottom: 0,
  },
  mb1: {
    marginBottom: 4,
  },
  mb2: {
    marginBottom: 8,
  },
  mb3: {
    marginBottom: 12,
  },
  mb4: {
    marginBottom: 16,
  },
  mb5: {
    marginBottom: 20,
  },
  ml0: {
    marginLeft: 0,
  },
  ml1: {
    marginLeft: 4,
  },
  ml2: {
    marginLeft: 8,
  },
  ml3: {
    marginLeft: 12,
  },
  ml4: {
    marginLeft: 16,
  },
  ml5: {
    marginLeft: 20,
  },
  mr0: {
    marginRight: 0,
  },
  mr1: {
    marginRight: 4,
  },
  mr2: {
    marginRight: 8,
  },
  mr3: {
    marginRight: 12,
  },
  mr4: {
    marginRight: 16,
  },
  mr5: {
    marginRight: 20,
  },
  mx0: {
    marginLeft: 0,
    marginRight: 0,
  }, mxHalf: {
    marginLeft: 2,
    marginRight: 2,
  },
  mx1: {
    marginLeft: 4,
    marginRight: 4,
  },
  mx2: {
    marginLeft: 8,
    marginRight: 8,
  },
  mx3: {
    marginLeft: 12,
    marginRight: 12,
  },
  mx4: {
    marginLeft: 16,
    marginRight: 16,
  },
  mx5: {
    marginLeft: 20,
    marginRight: 20,
  },
  my0: {
    marginTop: 0,
    marginBottom: 0,
  },
  myHalf: {
    marginTop: 2,
    marginBottom: 2,
  },
  my1: {
    marginTop: 4,
    marginBottom: 4,
  },
  my2: {
    marginTop: 8,
    marginBottom: 8,
  },
  my3: {
    marginTop: 12,
    marginBottom: 12,
  },
  my4: {
    marginTop: 16,
    marginBottom: 16,
  },
  my5: {
    marginTop: 20,
    marginBottom: 20,
  },



  letterSpacing: {
    'letterSpacing': 2,
    'fontStyle': "normal",
  }
});
