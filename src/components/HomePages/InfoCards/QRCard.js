import React from 'react';
import {Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import {QRCode} from "react-qrcode-logo";

export default function QRCard(props) {
    return(
        <Card className='primaryCard'>
            <CardHeader title='QR Code Identifier' />
            <CardContent align='center'>

                <Typography variant='paragraph' align='left'>
                    From checking in to the event to checking out hardware, you can use this QR code to save time
                    in lines and make the most of your hackathon experience!
                </Typography>

                <Divider className='mt-2 mb-4' />

                <QRCode
                    value={props.userData.email}
                    qrStyle='dots' eyeRadius={2}
                    logoWidth={50}
                    logoHeight={50}
                    logoOpacity={0.6}
                    ecLevel='H'
                    logoImage='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAANIAAADSABEULFowAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABGBSURBVHja7Z17cF3FfcevZNmyJfklP+SnbASxHctWrMe9smRqZJc66HHusZzcDIE4DAY7tDQzqduEMDwqXFpjcEjwDAEMtsE20jmbyAmBJH/QqZlCE5Lhv5IM7T8JQyhpwoAJhQbCcPrba5nKIAn5WLra3fP5znxGMAO2zu5+v2d3zz5SKYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIUvVklPTMt0n5qQ7+2uas711zV6wPu2HlzZ54Wcy2SCX8dUV6azadYYmP/ybjBfeoEn76uvy397xAdnwm+ls8MCQeOGD8v+rgpD/u4b5PfTvOPh3lmc48zz62QY/q352XQa6LHSZ6LLRZaTLSpeZLjtaEJpwtbWdLGn0VHXa72ttyqpsUzbcoRt2Uzb4hvzzI9K4f5j21Elp/M+JCf5Tfv5GeE14X4jgvHh/oCxfEv4jX8ZS1rrMddnrOjhdF7pOQi/TpVqknpbqOqPlolFL3jxV0rAukQa2UxrSXfIzlLfUvw2Y+T2MaB3vna67fB2GA3W6U9jY2n1iPi0+wW/zTFfwqYynrpG3xn3Snf2ZNIpTGCZxvJ7Jqmelx/Zt3XvQQw96DQ6qNqemDLzZ9wjPCP9L44dheDuTDZ9Oe8FtGb/vzxp3PTAZB1mo/KTb6e7ej4X/oWFDHCQM3tRzDbq3KBOSlTjL9Nl2P/iijPl+JJX3Lg0Yxph3ZKjwhPz8Qlvbkak4zhClO9QCSeoeqZjf00ihQJySuaN79NcGHDhBqu/oXyZv/KO87WEiewVpPzhCEBR2Uq9i4I3/Ng0QTJk81IueGnNqJg4dR+lFOFLYv6XBgaG8Ip8WO3HqOEzw5cdcrKwDG74eyNC0bsvRcpw7FpN8si5cCvUFGhbYhOxv+KV8PrwAB5+H8htDsuHLNCiwdUjQvFU14uQ4i3k8tVkvxKARgeX8QbdlHH0ub35JTcwPLoVAoxc04OzRj/lfodGAY/yuIasuwuEjSM+cMuEHDvOLRu/xMpw+3Ns/Gx6kkYDT+OG9OH2oRT5e4NNAIAknHGW8oAvHD5JeQskKP0jS58EN2cem4/wzXf/TB17SMCBJ/APO15/8tvUvkcJ4iwYBSdtApA+aZcHP6S29NAhI4olDh5K9yadLLWY/PySYd7UHkjv294K9NAJIOHuS+fbXW3yz4as0AEj6CsFE3oB0+gBPGgCA3E1wZRJX/f2YigcQvPAHSev+V+YPVKTyAfKHiybq3oEmP/gSlQ4weI9AcHWCuv/5yzuodICkDQPyd/VxXRfARw8NScJdhAMXdVLhAB9eGdilWpIw+7+HygYYkluSEADPUNEAQ80DqJNu7/uXMU6aK70Ahtsc9GYupya5+/kv21dPRQOM1AvorXW5+7+TSgYYsRdwlbvr/73wfioZYHia/PCAuwGQVc9SyQAj9gCednkI8DqVDDAir7pp/g61gMoFGEUvoPvEHBff/hupXIDRbAzqa+ULAEBSJwKz4Q73AsAP76JyAUYVAPtc3AKsqFyAUdHHJ0CDaGg/HNW23RnVXnJHtO7TB2mgMN484+IcwMs2VcK6LfdHi1Zsi6ZWLI7k1z+LKVMro/nLt0RrNu2nscJ48KKLm4Des6Pwg2jp6iuj4kmlHzH+RygqygdBY+cxGi2MJX9yalNQfUf/MismX7p6o8pF6z/e+B+ifFYNQwMYU5y6MUifdGJDoc+t3nTO5j/DtOlLCAEYw12BQdqdbcBe4Jte4Beld8c2PyEA47ApqMOdHoAfXGt0YXt90dTyhecdAIQAsC146C8AN5pc2CtbbhoT859BfznQXxFoyBB/CBD+nUvnANxtcmFXXdg5pgFACACrAc/uARwzubBnzF0z5gHAcADOswdw2J1JwGz4hMmFXTZz+bgEACEA8ecA1Pdd6gE8ZXJhV1SuGLcAYDgA8bYEq392KQCeM7mw5yy5eFwDgJ4AxOgBPOtSALxgcmEvr9s57gFACMA5Lkl/no1ABaL+soeiouLJhACY0wPwg1+7FABvmF7gVTXtBQkAQgASdzioDTsBG9qPRKVl8woWAkwMwsfwjhtbgb3Hy2wp9DVtd0Ulk8vpCYAR1ObUFOsDoLX7xHyrCv2SfVHJlAp6AjDxW4JzqtL+7n9nf411yUsIgAE0eqra+gBozvbWWdn9IgRggmn21Wr7ewByyYG1YzBCACZyQ9BWlbG/B+AFW6yeiCEEYKLWAnhqswOHgahu62djCQGYkINqAt+BnYDB5U58kpEQSKWKCAEo4H6AIGd/AHhquysVUjJlesECgBAA6T1f4cJZADtcqZDJpbMKGgCEAOcC2h8AfvAlAoAQgFgbgq51IADC6wkAQgBi9QCuc2AOIPgKAUAIQJzPgMGXHZgDUF8lAAgBiHUq0G4XtgLfSAAQAhBrCPA1B5YCq1sJAEIAYn0GvMmFHsAeAoAQgFg9gB77A8AL9hIAhADEWgp8uws9gP0EACEAMQLAhevB5IqjewgAQgDifAYM73ZgEjC8lwAgBCBGD8APD7gwBDhIABACEGsIcJ/95wFkw0MEACEAMfDCBx0YAgRHCABCAOL0AIKHXBgCPEwAEAIQax3AIRfOA3iEACAEINYQ4LD9cwB+cJQAmFjKZlRH9e2HMZRtyPDZhSHAMQJg4pk5r06eIcBUdvGwCwFwnAAwgwvWXYep7PoM+AgBQACMGaVl82VcSS/AoiPBjrqwGehRAsAcVm3owVz2cMyFrwC9BIA5LF71OYxlD8ddGAL0EQDmMGfJRoxlzWfA4FEXhgABAWAOsxdmMJY9k4C9LvQAQgLAHOZVb8Zc9tDnQAAoRQCYQ/WaqzCWPUOAwIXdgN8hAMxhzab9GMseQhcOBPkuAWAGFbM/gamsQikXhgD9BIAJFEUrW2/FVHbtBvwOAUAAjAlVNR2YyrrNQOF3CQAC4LypXNQiR0z3YSgCgABIWgDMXtgcNXX1YiaGAEwCJi0AMD+TgHwGTGgAYH4+A7IQKKEBgPlZCMRS4IQGAOZnKTCbgRIaAJifzUBsB05oAGB+tgNzIEhCAwDzcyCIyUMAjgTD/JDUI8E4FBTzQ5IPBSUAMD8k+lhwLgbB/JDUi0G4GgzzQ9zNQA5cDcbloJgf4n4GdOBy0DTXg2N+iLsb0P7rwXU3hgDA/BBnEjB4yIXdgIcIAMwPsYYAD7owBDjoSoVMKinD/FDIz4D3uXAgyL0uVMYF6/4S80NhA8APDzjQAwi+5YT5i4owPxR6DuAbLgwB9mN+zA+xhgD7XNgMtBfzY36IEQBecLsLPYA9mB/zQ6x1AD0OTAKqWzE/5oc4uwHVTS70AG60yvz1mB+M6QF8zYG9AOqrthT4RendUVFRMeYHQwJA7bY/ALzgKzYUdt2fH4iKS6ZifjAnALzgy/YHgB9eb0Nhz16Qxvxg2hDgOgfmANQu89/+9+Svz8b8YFYPQF3jwnkAO0wv6CWf/DzmBxN7AFc5MAegthvf/V+Ywfxg4mfAKxzoAQSXm17Q5bMuxPxgYA8gyNl/HoCvus0PgBrMDyYuBfatD4BmL9hiekHPqmrA/GDiJOBmB5YC97WaXtCLVn4W84N5PYCtKmN/DyDbW2d6Qddesi8x5m/sPBatWH9jtHjV56J5yy+N5i1zj/nL/0K+7FwerWy9RerhUWsDoNlXq+3vAXT219hQ2NPnrnba/A0dD0cLP7E1KplcbvQV52PN5NKZ+TBo7DpuXQA0eqra+gCob1fzbCjs1Rv3RkXFk5w0/+qN/xRNmTYnUcb/MFMrFkdrN99tVQC05FSl9QEgDzHNlgKvXnu1c+ZfteG2qHhSaaLNf4aSKRXRmra7rAmA2pyaknJB8jB/sqXQl9ZuP+cdgfOqNxtp/nVb7pdGPx3zD0L3hOrbD9vQFv+YckXyMKds6nqt2tATTZu+5OPHl1NnRzUNf23sc1QuasH0Q1BV025DO3zVpQD4jX2XMgTRiuavR3OrN+XDQE+eaUrLq6LZi9aL8a+Xt765E0trN3+zoAeb2ERR8eSo/rKHDF8GHPzapQB4ge+6hWXxyhxmH4HldTsNr8PgeZcC4DlMWVhmzFuL0UdgzpKLTT8N6FmXAuApTFlYSsvmY/QRqKhcYXodPulMAMiZAE9gysKiJygx+vCUzVxueg/g+y4FwCOYsrBMm74Uo4/AjLlrDL8VyIGrwQcNAfZjysKix7gYfXgWXNhl+leovc4EQMYLb8CUhUV/psTow7Oy5WaOBC/gEGAHpiz0rr+jsgpwBmYfal9A+UI5bKPP8MNA1HaHAkBlMWXhWbZ2B4YfAn0BjAWnAbW7MwToUi0YckIWk4zbaUe2old2WrISNe1MAOh9zZhx4oYCesYb86dkb8R6a05patzWv9CZAGhrO1kiD/Uehpyo7mSvHAbSfd7nHdiK3g69dPWV+R6RJXX2bi6nJqVckjzUS5hxgm9AuvRAVHVhZ2JWCepDQBat2JbfFm1ZXf0q5ZrSfvgTTGgOejecPgtRn4TkGrVtd0YNduz5H+5GoKfdC4BsGGI8gNGsAgx7nQsAueXkTioXYBT44R0u9gB2UrkAowmA4GoXA2AjlQswmgDoa3UuAOSCkCoqF2AUk4DdJ+akXJQ83OtUMMCI/C7lquThfkoFAyTsE+D/B0DwbSoZYMT9G99yNgDkuuNrqGCAhGwD/uiuwOBTVDLA8KzvDj7pbADoDQ7ykG9R0QBDjv/fTPX0FKdclp7koLIBhlwC/C8p1yUHHdxGZQMMyc3uBwArAgGGpNkL1jsfAPrOcz3WocIBzuINfXBOKgmSY8J/SIUDDJ4AdOgmINYDAJxjAPjBFxMTABd3PjpbHvodKh4gzx8bc2pmKkniwlCABHb/B30N+AKVD6CX/4afT1wAXNT+o1J5+N/SACDh/Hdb25GpqSRKrj+6nQYACV/99/eppKo+27eIyUBI8uRfukMtSCVZcgDiERoCJJSDqaSrpUstZocgJJC3m7f1L0khWRjkh/9Ig4CEbf3twfkD2pB9bLoUyis0DEgIL8uemAqcf3Yv4NNSMO/TOMBx3peFP504fsjFQRwaCo5/9vPDAzh9GDV6j5fJqqhf0lDASfzw31tyahpOH3mn4AXMB4CD/Fd9R/8yHD6anoCv1kqBnaLRgCP8oSnbV4+zz60nsFkXHI0HbDd/czbchKPj9wReohGBrd3+Ri9owMnnPyfwCxoT2Dbhx5h/rJYLy8xp2gvvYZ0A2PCdXz5nP1C35Wg5zh3r3oAsoOALAZi8wi+dVZfh1HGUTlY5VfgGjhYHg3hLuvx3NLcfn4FDCyS9k0pC4BDnCcCE7ueXLb36XAscOVFBkO2t0j2C090vGiUU5hgv/cbXW9lxoCHS56rJ5MuVMln4g4FkpqHCmL7t9em9+gBPfZ4ljjNY67Z+b5acNHS1VNpjwhs0XojJKW16GWpelbhz+93pGZwsSft9rVKZtwhPMXkIIxzS8aa+olv++WZ9UWdi7upLknI5NSnt9dbqq5j01kyp9Kelwl/FAInj9/LJ7l/1+pImT21v9tXqVE9PMQ5J6hqD7hNzJP036HsL5ec+oVcayTPCi8K7GMY6dJ29qAM+X5cyaSc/d+jeoK5rWjwaveTNoD/1NG1VGb0YSY8JpXH9rQ4KeYMclp7E9+TfnxR+PrBs+VfCawTHmBn5tdNlGjw/UMZP5stcyl4bW+pk90CPriPtBen8Zzne5sgENe56YLK+DHX91r7leuihG6g02kvl0+XWTDbI5fGDa6U7uiuPF/xVfqHTANLY9+hG/gGyzHRkwuPy56jxQf/ZH/P3D/5dveC2s55Fnu3Mc+pn/uD5pSx0meiy0V1xXVa6zHTZ0YIQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIWSr/g/ppgb+eUoghQAAAABJRU5ErkJggg=='
                    bgColor='#f5f7fb'
                />
            </CardContent>
        </Card>
    )
}