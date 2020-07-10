import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Styles from './Slider.module.css'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 100%,
//   },
// });

export default function Slider() {
//   const classes = useStyles();

  return (
    <Card className={Styles.pic}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Covid"
          height="250"
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBAPDxAQDw8QEA8PDw8PDw8PFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODYsNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tKy0tKy0tLS0rLS0tKy0tLy0tKy0tKy8tLS0tLSstLS0tLSstKy8tLS0tLS0rLf/AABEIAH8BjQMBEQACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAABAgMABAUGB//EADQQAAICAQMCBQIEBAcBAAAAAAECABEDBBIhMUEFBhMiUXGBMmGR8AcUI0JSYqGxweHx0f/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAxEQACAgEDAgYABQQCAwAAAAAAAQIRAwQhMRJBBRMiUWFxgbHR8PGRocHhI0IUMjP/2gAMAwEAAhEDEQA/APz1jfSeweYLtiCxmIqo2EeSJERdkysAQpWAHQMYr98RkWSzLUTRUWcbSToiZEkYpEQwVAY2QCDEhBEMxEAHxgRoTFqAwgQEMBGIosYjswrctI5yZU4xX75jJs5wsRYwWAMoBALKoRVRoiW4NsQWMBALH2xiFiA22Aw+nHQrB6cKCxShgOwciAFseqI68j4MVD3K+ljf8Ptb4PSG6DZnNlxFeCI9mFtEIwLowYUfsYqCyGTERAZNwOneJocZEityaKTGZa6waoV2Seqkuikc5EijpYBEBisAEMko0APoVmsxsa47JJsIiibLEOxSImUmArKSBsojiuajOZzZ3v4kstIgRFRYjCIYpEQxSIhgqAGAgBiIAaIAgRgMBGIZRGIcCMRfC9fEaIaOp3FcSiCQU9fmJo6JhAkpDbGVYyLKKICHJjJNUBhAgA22BNmgMxaOxUbdCwoZWXuP0MQ6Lpgxt0aj8NC2BHUaB15I4+RyIJplbo5eRAOTrw6gMNr8j5+IV7Dv3I6vSbeeoPQxiuiGIcykJnSORR+OPrCgu1RxNj6yaKsiw+JEk+x0i/cDMT1i37hSXBztJZSB1iGTqSVyYmIBIhggM+hAmoxBqAAMAAxgBEiBRdCKjIZy5qviBaIkRFCkRAKREOyZERSBtiY0KQO0Q6ADADEwAIHzABtsaEwgRiKARkjARiGAjAtiq+YyWdTkVAhEAIiyyEwJYRAAgQAYCAgwEAmF0NJs2ZGWtwK3yLnOGWE76XdHfLp8mKvMi1fAuFNzBQQCek5Z9THFyaNJoZ6l1GkdGs0ewWG3cc/N3VATLDxBNvqiejn8EcEumdvuJ/Kvs9Tiu4/uA+Z2w6yGSXTVMy6nwrLhxebdogMk2WeW4nZpdey8fiXupg1YJtHRm0qZBuxcHukVtcjq90eU6EGUI6dNmsbG5B/0gIV8O0/7GWiWLUYhM69T8xUVZxsBIZ0RFpLKQFSTQ7A/EQ1uc7yGWjMRUGAgklGqAH0IE1GIMBCsIFCwAVlgBmbiMCBEChSIAIRAYpEQxGEQxWFipLVoqLoTbUlKim7FAjAxEBDbbiasadDqtCpSVImTsZRKJHAjoQwEdCHAgIYCAF0biBJlWIBoAMogA0BBgACYAbFZNAEkiuOv2/OZtX/8nbo3+HX58ajf75OvOxRWZ1KluMbOjAPXUWevXmeIupU0fWSljl1KVNnX4n5Yy4kXUpnRwwx5EZFYY2Vr4LGttCuCOSwAmueWOTDxx+2eRgxTx6r0tLq3r8j0fDfL2m1A9utY6jJjAGP0GGJsjA+0PfQHgtXecI9HF7m/NHLL1tbLfnsiWTyP4ls9MYGYruICOjLQ6DcTRvtz9Zp08XjnbXJ52szQzYemM2q7e582ukyWVoWpKsLFhgaYEdeCDNj1mJcswR8N1EqpWn8lMemBQsrWVs7aPIHUj6Tli1vVPpaqzRqPCujC8kZ3XKBp85U2DRm88V7HbqUXKu9RTj8Q+YltsPnc81eJYnudiPuWu46RkkC0oQpHYnr2hQ7JOFAi2GrOZhfS5DOiIMJDRaEaSy0TIkjEIiodgqIDQA+imkxggMxEBCEQGNUEhWSdIxkyIxmVLjSE2TZYDsIwnvFQWJlxiSUmc5ERRNpJQrDiTLgpGUcRR4BjLLJKASiS+LGIyWyhwntKomwKsYWUZKg0JMwEQyiJEIpUTCwAQAcCAjQAMBFEZd+0AMAt8jqaPU9hc8TPqcvU96o+s0mh0/TH0qVq7Z7/APD7U6M6rbkwLlYYznxsWa1ZGFBR0PU/pE885Kpvbj7OOXT4Mfqwr1c/R9N5u0mXWqpzejh0eN1cqtDIoFhj6jH3cA8CvvE5px+DliU3Oo7tnt6A6V9Iq4sJGnRWxqmw5Gyoppr67ifz6yYSTt3z2DPinhyJSdvk+C8lavCmoAZsjIDmGJ8YAyZE3BVJU1XtIFdr4Eheidm7NqY5NN03uz9R8Q1wVXVHcg0dlofwnlV3CqPA5/xTsm27Tf8AB5iaVJpfyfm/lTwZs+Z2zMMLNkZyvsXIQ9HhL468kyFhlklctkew9dj02NKFOXZL2+Ti8yeFHSagaYuCcv8AWGTGACyMSeV7Hg8TlODg/o64M6z/AApdvzPA1+mCbWUMFbqGFFW+K+n/ADPW0eoeSLUuUfP+K6FYJqUF6Zf2fsLpsxU3+s3cnjvYOsxi7HQ8xDJ4nqWmJmzpzGJMXd/8jsCTqPpFQ0yOQECRK0jrCmR6iQt1uVImwiew1uTYSWUTMkoEBGgM+gM0GNGgMIgIm0QwgykJisYxomYALGAsAL7h1viMRyZTchlog0ktEmkspCkSJKyosA4hFUNux1lohlVlEsvjNSkQzrDDrcsghEMaADCICimAMYmJiQFkjKGMQBACiULJG4gEhbAsgX3mPWZnjilHlnqeF6WOacpTVqPb3Z9D5Gy6PIM+PUFXPosww7SWcY1Z2AZSBVD8PfieRNOTV8/qeu5PFGTx8e3se34HoNFk1Rz6fFhQYkRaxlSCCPxqvS6HUfJnPIpS2uqYNyxQXWrUl/CZ5/mRHzF2cujY9rBFKvp9osIu3/GTR+LqdI45dO+7Fh1kYy6KqP8AV/j8HreTEztjIV8mNMeUgkdGYqpsA3/x3hHHLpYtbnx5MsadpKmzl0ukTSas64+nk3Y3D6TEQrDOzCnbYPapPB6EkD6S7Si73ozY8LyZIxTpS/L9Tl8G8w5VbID6e3JkbKmRsQZceU+4gXYIFKB8GviLDOpr5e56mt0qyY308wW30ubIYfFBl1IzBmbLkKLkzO6YS6AWVHt6bgnPBFV2nqTxSvaVJdj53HlxqNyhcvfjav1PpPMGlxZcS58vprrNmPHka9uQotbsi9zt5F9aBnDLhjJSSW9bfZr0moyQa39N7/C/wfE+KaFcJy4jkUlnChQxyDFZsAt8jgTDp8jhNSkqrk9nU4458E4J7vj2+NzxNhVirCiOCJ78JqSUlwfHZsUscnCaposTa18dJbOKOeNFMZ+kolCLBDZnEbEiRuSUiTyWWiLCQ1ZadE2ERRMyGNAqIYpiA+gM0GUJjEBYAxckBowghMRoxoULcYCkRgAiMQhERQDjiCyOVakstHO0hloWSM0YDLGhMviW5aIZdUlEWECMQ4EYgiIYxWogGSIBzEJGSA2M0BIKRPZOiopOSTN/MMzAKlLwAD83VCeDLrk3KW59cvKXTjh6V9n1vh/jul0mQDFpcArTeg+ooeszbPc/3a/kVU4NuR0lpVVOVv8AA+YTW78rtjPuL5D7GKBb55a/wglh36CdY4Z0mRk1eCPVFvq+D1fG/D2xjGr5mUFQ6py4bmiSb46cXf24u1Jy6lHdo8yGJOUVOXSpd2N4Z46+P3A70Viqi7DLe0M6ChRN9+efpOcXLrXuepnxY46WSitl37v7PptbkTPpT62PYXoOrWi5D0CKVAPBC9vmu079cb9Wx4+PDkyOsatnneTsjZNX6BO/G29sqooGNCjk0TwD7XAqzfHxzo8uEFtyc55Mk363Z1ebfBly5f5jQYfTXafUTJlXD7lN7qYjaevU1zfF3IlOTi0nudMCjHJGUlscHlJfT1SHWogTKmTd7w6OuT2l99kf2/hF9/kTPj6lkXwezmlGemm139u+55/mDwnAmd10mdtQEYvvtXL7ieP8wHS/mc8zXW/k66WDeKLqmu3ueZ4ttYplXgZARtIpht4uu09Hw+bcHF9jxfHMcfNjlj/2XH0cqmekjwGSPWBQxlEgSADOJSERyNRoDvIb3o6xiqEdIpMIkWUfvtObZaRBxEUiTCSxguIYjGSUe/NBkGMYgLAGDJAEKsENivGAhJjAEYFFYVUpEsiYmUFmk0M5Mklloi0gtEzEMwgBRYxMtjlIhnWrS6IAJQizMKjJROSUEExAOkQDNEwQ2OAmF4AhlghMoMSh1GQkKWXcV4YA/F95klqoNSjHle/B6UdBlg4TmnT9uUd/nLTYGxJnwkhnxqSiIaUM1UrA8cKbAHYTHiwpycnwzdm1c/LUO6796PK8G0/o5DtolCi0Dak2AWBr3cmx9JclHJCqpM4JywZLTTa7rdH1PiGZCSjln2Fw2MbdmRlVaBWxwegW669b4jC4RuMX/U6ajBmdTkrtXtxv+R874ayZNS7EOFfIpDOA6j382FPS76AgTrKm79jhGckmrdM9fV4MuHMqvu3qpfcbyexxwtE9Dw13wAJgyYpu29z3tHqtPcYw9Pw+57vl3wnKzOcbuPX3iguzGVDHeXI5NtXJ6ADi5rnOMem+540oeuSXZv8AM9zzXmdFOclAjKlKE37wUNhweF5YUL+xvjHLI7To74cVvptbnzms1q6rHi0foFScmDGDjyKFsu5/Dt45N9B1B6SvNi10pcnow0U8c+uclSIecPLCeFsGTOc65QyoMgrMuQUStrwyDcp5neOmcpJLgyR8RWPHOUv/AG4X7+D4zcTySSfkkkz10kuD5yUpPeTv7LLLRyZNoFDSkSLGA1xkgJ/9ilwVGyOT9/8AU4M7I5XE5M6oSVETJsI2CJmSULJGe+es0GRDExiAkEDBkgwQFEEDFeMaJmMDSkJggBqgxoi0kaJPJZaIsJDLRMybKMIWBRRKRLLJLRDKrKIZapSEzQEGDBGWSMokQMZhExI2OCBjPBggpBAw51VyAxZdxUHqRV9vrPBz4/Km1yfX6XOtTii2mu39CHjWpyogC1sxur4wwelBsDFtIog89e0vHl6o9DM2r0vlzeWPHNUyKZ1yU+JShY84yoCq/cq3Wie3H3mvGqik9zzc2Trm5UlfZbI9jHkA/q5XLklQfcNyjqoC9aIo/PtrpMLwynJ1sj3I67FhhFyfU6XHb+Tm8L1+DDkYtvYf1Q2GgVylm9hII5VdxFdb6ckTt5WRf9kv07nlvLhk76Hbvb5b2r6OzxTMorc7FygKoTj5PSwo/D8c/Brid8bp9Ud0ZMuKWOXTNUzr8E85ZFyqTiDEBS252RnVeLHHJO5evFKJnytRd8mnS4Hml0p0fa+IeOaZ8O98Xpgq7FS5J9QlmIU7eRZXn4ahVcvCvNVo66zDLTT6G/lMn/D/AME0mfKmp02Yf0cmffjPtLuD7MmIAjatEfXbz3nLyX12+34Gh66sTjV9S+/uzxf4ttXiBVs/t24yuLk7Cyi/yBNA/pHmm7SXsPRY4eXcnyz5jxIJtxhQA4X3kf3fDfU1c1+HqVSb4fBl8beJSxxil1Jb1/Y5BPSR4DEMChjKRIsYBlEiGSykK/z9z9Zxao6pnPkFyGrLRIioJUNuyTwYInEUKRJKR7zzQzIjMYgGQRoliOYikG47CieQxgTuMY6qO8okDCoAAmJjIMYihCJLKRJhIZSINObLRlggLrOiIZUCWiWOsokuGlIkK8wEEqO0AEuSUUxmIRS4rCgIYgHaNkoCGA2dC9L3bQoJ6A/ndHvPI8QhWRS9z6bwXK5YZQuun/ImHVJnZsTIm0Y7x9b3oe/zYv8ASc9LFJ/IeI5ZTSSfp9iH8oKUbL2+pTIBuO5eN3zRE1Sg1JyT9vowxywcIwnHZXuubfF/CYNG+TGy+z1CjGrok7RZ5J6V+m7iGSaityMGGeWXTFHq6jWYH4OFlzEK6l2QLYW9wrqQBZs1dfbPKTnD072bsGJYc/8AyNLpVlsmjG1X1AxgFSUZf6hdRa0GB78e3+2+/MWmjOMqS2Z38Qy4c2J3JdUeK79qv+/sj2fC/KSZggxtjVv5dXXGhXLkIZ8m13O7i128E8/5ZWWSzLZ0k2t1XHsY9Fmjgcm49Ta7dj6gfw1wlPRbO1tRb3AhV/wjv8qOaAEy9bi3GD5NGfN5sEnBKnfu/r6PkNR5Xbw7xArpcxY4lR/VCrjbCXb8JaiOB17EN06iTKbX4G/SY45YOUkknar9Dw/Gteuo1L5s/wDVYgK2Xi8mRFC71rgAleAO03/+HOUE73fP0eTHxHFDI4uPpXHvf+zizZS7FzQLdh0HFT0cWNY4qK7Hj6jNLNklklywGdTOJBDGMskm2OzclxtlqVKhzOhzJtEykI0hlokTIoqybxMpEWklIUiSMmRJKPfYTQzGhAIihz0lEkb5klDmOgRF2ghinpcY1uzY8t9oRlY5RoBeURQGaJlESZIwExFIRohoiZDRRhBICyyyWODGSEGMRZWlEhDxiDky/lJk6LjGzDpcE7E1TGRomIsIUKxL5iGWHSUQJ0MkooRYo3R+DUjJijkVM64NRPBLqiTGEoAyNtOPoxH59SZ5eogsM10nv6Kb1WGTnVLY7/C1yshyZa5DZGyJTFuKVMiD8N+4hooZJc8/H+SJYItdFVW9rf6X4skcwJJ9RKA2cKCo5XcOSASRf6ciOePzn6XsXp860sfWmm/i/wBugavNhZhv9VhtCuQBvFfhUE8UPd9bnXDjeOLUqM+uz4884yhd1vf9qOrBo/UxM+mByL7MZwspfjaxZyxqj1Njp94scnJ1drffv9Cz44Rh1dPTJ1S5VVu797OnN4Q2gbCnq3kXJ6zBWI9OgKNdLJBBuqo/MyaunP8AA9Lwpf8AG7Xf+qo/W/Kvix1OD1XwvhONV36jMipjYqtnIlm9t8i5KwRnFPuZtS5YpuPZ3W5+M5Ma5dbmbDm1OXA7uyF3clzQp3BPIJvt8TtqoeUkvc6+FPz5P4ObV6YJtFe7ub/FQHur87/0mzQ5Jzi+p7I87xfT4sEoqKpvkgBN54zMYwMojExiJSJBtlAKYASYyWUiTVd95FdzpbqhLibGkTyGRZVECZJaFJiYxCZIz30M0IyMYCFCsnkaDGhUEENs2SMSIwKHAjoLJsYAT3DsYk0ynFomWgCQjGSNC7ohilomUKTEMwMAGDRoQ26MmgqYwKBpVk0U3AdTBtIFFsopjJKVCgsSIC2OBLM4iY0xsbQQmO6wYJiq0Q2ioN/98ycmKGRepF4tRkwu4Ojp0ObbabzjxsRuAJAIBvn/AG+88vW6Xoqcex9B4Tro5JPHk2b3Oj+Z0yvtfDl2inLYmFkHgqVPBBH35MzYZuMGu/v7G/XYYzyxfZdvc9XWeI6RtOU0uIDLkAxt7ApXEUG5lJ4vg8c9Z2nnSh0p9TMuLROWXzHFRj7WdvlvE2mz1mXCiDDZdmQuqhQxZQL46XxZJPSpnwZUnV87fibNbijkx9VL07/L90ef5g8zqufHqdNkx6jbk3Nv0uygMgYLbe48GroTXmuDSaV/R5+lmpwbi2o+1+/+jo8zebNdqlONtuPG4DLixkoRa/hJvlas8zJHK3NS9u3Y3y0MYY5R91z3PkUYoTsYgfINXPd6FOK64nyazSwzfkzaXvxYGYk2SSfkm5cYqKpKjlPJKb6pO2aUQCADLLRLKASkIzCMRAxMaJ5JNlpEDJZaIZAbnNrc6p7CO0QkTMlstIUmTdjoQwA9xTU7mUozx2KiQ5iGUBlCJO46QGkTMYzb4WBIyeoqhGP5QHyTJiGSdpLdFJWKr3EpWU40YmAgXADQAIMAMz1ByoFGxkaNOxNUVBlElFP5XGLgcQ6hUV3yiaMIAURx0iFRUmAiZ4kjLI0aJaA6wY0xQ0B0VDSZwU4uLLxZJYpqceUBcajpfJs2bmfFpVjtp3Zr1GveZRTjVO+Smmx7dxLrRUgLXuLEV9pihpciyxtcPk9bJr8DwTqW7XHexRho7g4O4AFSSK45J7kjt9Y8mHM8vUo9ycGo00dOovJyqa7/ACHG4U8BWFmiw5qbcmljlpz5+Dy8HiE9NccVNX3RXV60vXtC0KJFkt+6k4dFDFLq5Our8WzamCg0ku9dzlms8s0YAiAwEAHWUhMoJ0IFyGAEDEykSyGQWiBaSy0RdpDZSIkySwGSxoWohimAz3GmgyCxDGEYhWeOwog8RSAouNAKz1wPvxOUpnRRFElDAxvr1lJg0RJlCEMQxYhhMAFiA0ACIwNABhGIcGMRZTX17SWwSCZLGMmS+D9uJUZ7icRmFTqzmFIgZdXjJoYmIAAxDKq0qyGgssVAmJRgUENAKCHhYqNugFAuMKNAAgQoLDUdCsEADBIQZaQmbdKEJkMQ0iBMhlolkaSy0iDGQy0SYyWUiZMlspAuIYpaIBbiKPex8zSY2OVjFZHKaiKRItCyqJloBRt0fYCWW/8Ag/lM0zvEUNzJT3G0E/v4nREE2nQQhkjFMANEMEANAAwAwjEMIAOsoRT9/lObGAtzObe5aQ2L/wA/MxxFIru/QTV2OBg0QUUDQCiuI3AlltsCbFIqA7CrxiaHBEYqCVhQWApCgsG2FBZtsKCzRiDcAATGAaHeFIabMZRJoxCvEMmTcllInlkWUjnuSWSyyWWiLGSyhDJKFMQwRDBcQHu4uk1GRlCYEnPqIFobHjFAnm4CbZPUYwOfntAadkGMCgbpLVjTBY/feT0lWITxQ44jrYE9ySipMU0XJ2GDJEaAwQAwiGYwA1xiCsAHghGYWISVlRdFFNCj8Sq2Ib3HsfvtF0hYd0aVEthUyxMvp8YPPx2gTJ0UyYxRrihASbFwQQ2dAMCKC0oRiIUFk+kRQyvATQ26MVG3QCjbowNARgI6AMYgmu/aDVjTaNcZIGjAkxiKAz8SWUkc7vIZaRFjIZaJPJZSJkyShCZIxTEUYxALAZ//2Q=="
          title="slider"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
 