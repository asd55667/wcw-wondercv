import { message, Form } from 'ant-design-vue';
import { reactive, ref, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import type { ToggleItem, Email, ValidationRules, LoginData } from '#/views/login';

import { emailLogin, emailLoginCode, gitLogin } from '@/api';

export const EmailCodeInterval = 30;

export const carousels = ref<string[]>([
  'https://files.wondercv.com/auth_frontend/banner1.png',
  'https://files.wondercv.com/auth_frontend/banner2.png',
]);

export const toggles = ref<ToggleItem[]>([]);
toggles.value = [
  {
    img_src:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAEpklEQVR4Xu3cz4scRRQH8Pdmdhdxdw+yHhfFi39AkoNILuIhOrhgxItInO2pISB495g1d29CQLp6SWA9LJgEQsCI6Cm5+OMfCARCklOil51lf8jWk56wK/trurq6q7t+vDnuVL2q/n6md2q6awbB8LG+vj6zs7OzsLu7i4Ylgug2MzNDCwsL//R6vR0bB6QVLhFhlmXvAMCnAPAeACwCwOv5321MytOaLwDgKQD8NjU19WO/33+AiFT1WCYGnAOsrq5+oZS6CgBvVB0spv6I+AQRryRJch0RlemxnwqUZdkZpdT3AHDWtDj3A0DEv7rd7uXl5eU/TfI4EShN048BYA0AXjUpyn0OJ4CIWwDwuRDiVtlsjgFlWfalUuo7AOiULcbtJyagOp3OV4PB4FqZnA4BpWn6PiLeI6JumSLcVi8BRNwDgA+EEL/o9QA4AErT9E0A+CNfnel25nblE0DEv4no7HA4fKzT+wBISnmTiC7qdOI21RJAxFtCiE90qoyBpJTniOh3nQ7cpp4EpqenF/v9/rOiamOgNE3vAkCvqDE/X08CiPiNEGJFpxqura29tr29/ZwXBjpxVW9TBicfLb+E85lS6ofqQ3OFogTK4oyBpJQ3iOhSUXF+vloCJjj7QPeJ6N1qw3PvSQmY4oyB0jR9BABvccR2EqiCs38GbRHRK3amF3fVqjj7Z1DlexY2GPJ7KYh4eW5u7ubGxsa/JmPMz89Pj0ajJaVU1vS1xTpwXAf6WQhxwQTmaB8p5R0i+qiOWjo16sJxGggA7g+Hw/M6gRS1kVL+SkT5nWDrjzpxXAfKb3Z9CwC3EdHoX1yn05na29tbIqKvrcvkK64SVwh055Ov4px8D9I9AFfa2cBx/gxyJfyiedjCYaCi5DWet4nDQBoAk5rYxmGgCkBN4DCQIVBTOAxkANQkDgOVBGoah4FKALWBw0CaQG3hMJAGUJs4DFQA1DaONhAi9gaDwT2NF1xQTap8baSuILQulna73Q+TJPmprkG5jn4CDKSfVSstGaiV2PUHZSD9rFppaQw0Go2CudGXr9ZmZ2e19ko3rRQ9kMs42svsk1ZxIZxBruNEDeQDTrRAvuBECeQTTnRAvuFEBeQjTjRAvuJEAeQzTvBAvuMEDRQCTrBAoeAECRQSTnBAoeEEBRQiTjBAoeIEARQyjvdAoeN4DRQDjrdAseB4CRQTjndAseF4BRQjjjdAseJ4ARQzjvNAseM4DcQ4LzcZO7n1l3H+3wHuHBDjHN6e7xQQ4xz/7oQzQIxzHMeZ9yDGORnHCSDGOR2ndSDGmYzTKhDjFOO0BsQ4ejitADGOPk7jQIxTDqdRIMYpj9MYEOOY4TQCxDjmONaBGKcajlUgxqmOYw2IcerBsQLEOPXh1A7EOPXi1ArEOPXj1AbEOHZwagFiHHs4lYEYxy5OJaDNzc0VV39G0n5szY1gvGmkuSnGPRIDOe7PQAzkeAKOT0/3DHo7SZKHjh9LkNMrBMqX0kIIJ3/0O0iRIwc1EYhx2n8JnArEOO3jnPpBlXHcwDkRiHHcwTkGxDhu4RwCYhz3cA6AGMdNnDGQlHKFP+e4C/QfoMtzloN2eXgAAAAASUVORK5CYII=',
    img_src_hovered:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAAEpklEQVR4Xu3dz2scZRgH8Od5J3WDOZV6bCK99A+wHqR4EQ9qsWDFi5SWvDNQCHjvMVnvnlIwkd2ZVbA320IRVEp7ai9t/QcEQVRy8McpYSkm88imTSRuknnn/THzzvs+ue7zPO/M98PsbjLvZhE0f5aXl1/a2Ng4tb29jZojgmibmZmhXq/39+rq6jMXJ6QULhFhlmVvAMBHRPQWAJwmolcAQKnfxYH7NhMR/ySi3xDxgRDim8Fg8AgRyfQ4jw14ApOm6VUi+hQAFkwXi6kfEX8FgOWFhYUv+/1+qXvuRwJJKV8joi8A4JzucO4DQMQfkyS5NhgMnurkcShQlmUflGX5NRG9rDOUe6YSGAshLud5frtuNlNAUsolALhBRKLuMK4/OgFEnDzNfVIUxed1cjoAlGXZ2zs7O98DQFJnCNcqJ7CDiO8WRXFPtWMfKMuyV8uyfPLi3ZlqP9fVT+CvJEnODYfDX1Ra94GklLeI6JJKE9eYJYCIt4ui+FBlyi5Qmqavl2X5WKWBa+wkMDs7e3ptbe33qmm7QFLKb4noQlUxP24nASFEP8/zFZVpuLS0dHI8Hv/BbwxU4jKvqYMzWQ2llB8T0U3zpXlCVQJ1cXaBFhcXvwKAK1XD+XGzBHRw9q6gh0R03mx57j4uAV2cvSvoZwA4wxG7ScAEZw9oDACzbg4v7qmmOHtAxvcsHDEQIl4TQkx+gf5HZw1EPFGW5UUAyJv+26INHN+BfhiNRu/owPy/R0p5l4jetzFLZYYtHN+BHo5GozdVAqmqkVLef3EnuKrU+HGbOL4DTW52fYaId3Sf4oQQM5OnOCK6bpy8wgDbON4DKWTiTYkLHAayxOsKh4EsALnEYSBDINc4DGQA1AQOA2kCNYXDQBpATeIwUE2gpnEYqAZQGzgMpAjUFg4DKQC1icNAFUBt4ygDCSEuzM/PT7YER/Vj8rERW0FNNo1U3rBLkuS94XD4na1FeY56AgyknlUrlQzUSuzqizKQelatVGoDbW5uVr52tXJGGosiYn9ubk5pr7TGeKOW6IF8xlF+m33Yu7gQriDfcaIG6gJOtEBdwYkSqEs40QF1DScqoC7iRAPUVZwogLqMEzxQ13GCBgoBJ1igUHCCBAoJJzig0HCCAgoRJxigUHGCAAoZp/NAoeN0GigGnM4CxYLTSaCYcDoHFBtOp4BixOkMUKw4nQCKGcd7oNhxvAZinOc7hr3c+ss4/23n9g6IcQ7utfcKiHGmPwjhDRDjTON48xrEOIfjeAHEOEfjtA7EOMfjtArEONU4rQExjhpOK0CMo47TOBDj1MNpFIhx6uM0BsQ4ejiNADGOPo5zIMYxw3EKxDjmOM6AGMcOjhMgxrGHYx2IceziWAViHPs41oAYxw2OFSDGcYdjDMQ4bnGMgLa2tlZ8/TeS7mNrbgXtTSPNHWLcKzGQ5/4MxECeJ+D54SldQb1e7+z6+vpPnp9LkIdXCeTDV7QEmbziSR0LxDiKKTosOxKIcRymXmP0oUCMUyNBx6VTQIzjOPGa4w8AMU7N9Boo3wdinAbS1lhiF4hxNJJrqAXTNF3J89zLLzdqKAOvl/kXJMF/loXNykUAAAAASUVORK5CYII=',
  },
  {
    img_src:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAYAAAAdHLWhAAANA0lEQVR4Xu2deWjUThvHZ2urVaxU8cILFdF6UUVFRUVURESlf0kRPKhFqvXAu2q93nrVehept+KFiIiIiBQVI1pEZJF613rVs2jVUqpWKe2P77ydMkmTzSSb3c1mMyDq7mQymU+emWee55lnPbW1tf8jbrHrCEgeF5Bd2RDJ4/HccgHZkw+Fg665gOwHqB5OA0A1NTUkKiqKdpn/t/2eQd4jZb/xLXsOX33HdXxdrWcO4rjI4MgA8Z1l/7Y7JOXLxPpt5oVCW3qA8L1WHZEXgvVLrZ9RUVEN4GhKUGVlJXn79i3B33YsGIy4uDjSpUsX0rx5c5nEl5WVkQ8fPpB///7RwdQrHTt2JB06dKASpzfIaPPdu3fk58+fsrZjY2NJt27dSHx8vN7t6PcVFRWkpKSkfnwBZ9iwYXTNUZYGaxAe6sWLF2TRokXk6dOnQjcMRaWBAweSHTt2kN69e8sG9vLlyyQzM5N8//5dqFsLFiwgCxcuJC1atNCtD/hLly4lt2/fpi8AK61atSL79+8no0aNItHR0brtFBQUkHnz5pFv376RRo0aSZ8+fVKF00CC2NoDQNOnTycPHz7UvVmoKowZM4bs27eP9O3bVwbo4sWLZOXKlfRN15MgDCZgLl++vF4SfT0PAM2dO5dcvXqVVFVV1Vft3r07OXz4MAXUuHFj3SG5c+cOmT17NvooVVdXa8JxLKBVq1aRN2/eBARQeno6BfT792+/AM2ZM0cqKiryCcexgEQlCGvOunXrDEmQFYAKCgqkkSNH6sIxDAhTgt5CqivfJipUV1c3kAatKe7SpUsEEvT+/XtdCcKzoO6yZcuEpzijgNB3vkRHR6tqa1rDoqkkKNcgwMFiOGTIEKEF1QQH1UvKy8vJ48ePSWlpKeEfVgvQgwcPyNmzZ8nXr1+FujB16lQyceJEAk1Mr2ANMgIIfUd/fvz4QZv2eDxScnKykOSwvhgCNHToUKo59erVS+9ZLPse6v6GDRvIrVu3ZPO+FiBoV1gf9BQE1sFmzZoJwUF9o4DwYqWmplKVGqp0aWmpITiGpjhI0PDhw8nBgwdJnz59LAOg1xBUfWhaN2/elO3LtADptefP90YBFRYWkhkzZpDi4mKpqqrKMBxTgA4cOEBV22AVBuj69etCEhTIfpkBlJqaKnm9XlNwXEAGaWoB6tq1Kzl69GiDfVBhYaE0YMAA03AsAcTsU2wB90fLU9MSrZIgNU2Q8VHbXPKWAlYPgLCpvXbtmmyjCkCwJIwePZq3JBjS1izR4rAGKac4PDhU2nv37hFoLWYBwY4FDREPy5tLrAL07Nkzcv/+/QY2usGDB5PExESZBQBwUBcWFf7Fw+dfvnyhtjRmNMXfrVu3ppaXHj16sOe3BI4lEoROY32ApgWNy2yB0RLKwKRJk2R7EqsAHTlyhGRnZ9OXiC+wrTFbHBt0aIFr1qwhFy5ckEkKDLM5OTkECgovdXgpoQ3WvViWwbEMEEQeG76XL1/K/EmisDAwePs2btxIkpKSAgIIkr9582a6n2IFA7p69ep6SwKkBZ/Big9rxOnTp6liAgD4rm3btnQqQx81bG6WwrEMUH5+Pn0gBoitS6KAUK9nz54U0JQpUwIC6NChQ7R9JSDeWMpLEJ7n5MmTMkDt27cnubm5tI8qG1vL4VgCCG8WAGHxxJxttgQaECQIgJQWBkzNSms2LNX4DIB4nxgkCIAgQQpAAYETUYBg/oEVBM42vsDsP23aNLqGsIJ1FSBgtWbaHKSrZcuWZPv27WTcuHH8FBcwOBEFCO6HoqIi2aKPAXj06BH9nFersQ7BIQiNkl9rIDX9+/ev98AS8v/QKLOzhsh1hmxxWmp2OExxkAClZRkDBInAwg/Vmd8XQeNTSha+5/ZqAYcTURKk9rYC2pYtW8jOnTspIBY4wtTpWbNmyaY+ro2gwHEMIDwIH+HD/9/XNAKJAqDdu3dTZYCp0zqAggbHkYBE5nW+zqZNm6gECQIKKhxHAWJSg4GGzUxtvVHCwxQH98mxY8fq1Wl8piFBQYfjGEC8/Q8RMzDrfP78WUiY4EyDLZEB1QAUEjiOBISYBFgBPn78KORVVdPuFBIUMjiOBGQkLk5LxBiglJQUqWnTpgHd5+iJueP2QQAkGhfnC9CuXbuktLS0kMKxTIJgzca04o8tDtGZWVlZfluzrQAUHx8vlZeXhxyOZYDgrMOOHAuzGYcd1gEEwiNeGeGzvF3MqD9ICxAMne3atZOZbnBfxEcrQrokQogt4FgCCI1gF45F+e/fv6YBNWnShMCcD88qD9kqQIh/S0tLo95PVgAIGh/8PnVWa1vBsQwQGhKNQ/O1KKpJn1WAIJ3r16+ngPj7YKMKS0JFRYXt4FgKSE8bMfu9lYDgD8JUx0sQTD25ublSWVmZbaY1fqz81uLMDrzodYEGlJ2dLWVmZtoSjikJCnZkKaJxEMAhGriopSRgilNKUDD8OaIvolY9QxKEmOwVK1aQTp06WbLm6HUeawUOYp04cYJ4vV5ZyJSvA1xq+yAVQCG1EOg9O/teGBAugPqLRVbkFJloB/TqwdOJ0wHsRBsLSPETUFjAMTTFsYE0s8/Rg6D1vZqPhxk1/QAUNnBMATI72Gau418GPpITbZkBlJWVJbVp08a2CoHaGKlOcc+fP6fHJux4iJi5pRFZs2fPHtVDxGprUHp6upSXlxdWcDQlyIGAbLkJFZlVVCUItilEusB8E8w1R6TDqIN1CGeUIOUsCQW7Ftre+fPnqVcV0yLyEBw/fjzsJMenFocHg21KxG0sOqhW14MmyQWs1zfPjkDW9T3s1hzlODk521VYaWvCG1Wr3/RgtKeS4MgRcFSVhGAMqNX3UAByDBzDgFiAhVZKLqsHXrQ9ztUR8hgC0T6L1hNegzAI8JheuXLFr6OOoh0zWg9JIjIyMsJWW/N7DQIgnNtcsmQJPQ1gp4L0Knb15/g7ToYkCLEHcBvbLI9c2G5CReAZBgSzPVKc2KQ4Go4hJYFNcZAgmwByPBxNQIDBcgEwScFnyNyEs5vwcvIFJ8+wq1eahRS7enoJ6qA+/iit1ThRrcw1igNTaJv3QWHNMZOYyCZSb6gbqlMctDWEIyFpA++TgY0OweksvRbuhAGEXQyn0ZCujKngMLUAKLQ+2MVYwWAjaxZSgCHEitXH4V7URQIiPt0kvLc4tIvcpLgXtDU7RHwaGmU/Kmu6G1JSUuhgKYsypQrebAz21q1b6VF6VlAPiSAQB4DzoawgeSvaXrx4MXWdswLXNiJLkRSWP46IM6Hbtm2jaVZiY2OlmJgYx6nSvvgZcnmrNQRAEyZMoIegeECQAliVMehqgDBV8oBevXqlCQihUePHj3fcJlREsGwFCNKGaU5FgqTJkydHlOQweLYChMhP5CbgASUmJkqFhYURCUdVi8OibSRvtlVTHNagvXv3khs3bpBfv37RFwjOttevX0csHFsBgoMQrnZ2Mi4mJkZKSkqKaDi2AoTOMKt0TU1NxGlrWgqDbdYgroOO8ueIaGphoWbXddKFo6ClKkGwViMNikhcHEw2bB+EpHz8RvXcuXMNNqo4oItc0sp9UDgEsvsrDWauVwWEjSWC/5RnTv/8+UOddrwpBlrciBEjSEZGBuncuTPtQ21tLV1P7t69S60JvKkH9ceOHUuT4sE0xCSnX79+Ea8QqAFUBQSjJSzWyh94evLkCY2X4y0DsI8hoB4nH/gkd7DhJSQk0DOn7EeY8BmMoWgHvqW69CtSfn6+C0dDvDT9QWpHGjGoSn8QM6ayX7Bi10FScC507dq1BCe4WQF8HCfBscPS0lLTGdnNTBfheI1lDjvlSQRYrZOTk+m5UCTGYwVSA0DIQ1BSUuJKjs5bYwqQnssbUsQDwhF7FEAEoFOnTknz58934QiItCFA7LfX9ADhvlibIEGwZmOKY36fyspKKS4uzoUjAEfVkqB1HQYYLoEzZ87oJqxAXaxBgwYNos42LjeBu88RBMOqCUsQLoAGJpqLDfWhvcFBF4iM7AafM2yrGwLkx1O6kmNy8IIByIVjEo6hNcjkPVw4JgfO1Bpk8F4uHIMDJmTqQSWEVSG6hrehYQ+DbFQwjPIZozT64MKxAI7qFMfUafwcJb/fASCozfj9HNjYfBQXjkVwNAGpnfJmvwKp8yODLhwL4WgCUgsaEQDkwrEYjpWAXDgBgGMYEBxzeXl5yh+6deEECI5hQEgaAS0OQe/0Yo9HysnJcQ2fdgCEPsAACq9p3W/oOPbYYQDH23DTZsOuIuLwlOHRDMAFZgC5cAIAQqtJo4BcOEGEY0hJQNyanTKyB3mcQnY7UQly4YQIkQggF06I4IhMcS6cEMLxCWjmzJmS1+t1N6F2BFRcXCwlJCS4cEIMR1WC3FMGNqDCdUGpJLiGT3vxITwgF47N4PBTnAvHhnAYoDEej8dVCGwK6D+rlHpq1sqnZgAAAABJRU5ErkJggg==',
    img_src_hovered:
      'data:image/png;base64,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',
  },
];

export const loginForm = ref<Email>({
  email: '344078971@qq.com',
  valCode: '1234',
});

export const loginRules = ref<ValidationRules>({
  email: [
    {
      required: true,
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: 'blur',
    },
  ],
});

export const loginData = reactive<LoginData>({
  // switchTab: ['手机号码登录', '微信快速登录'],
  switchTab: ['邮箱登录', 'github登录'],
  switchTxt: ['简历', '招聘'],

  isWxLogin: false,
  isQRCodeValid: false,
  isLoading: false,
  isEmployee: true,

  phonePlaceholder: '输入手机号',
  emailPlaceholder: '输入邮箱',
  valCodeClickable: true,
  valCodeCountDown: EmailCodeInterval,
});

const { useForm } = Form;

const {
  // resetFields,
  validate,
  // validateInfos,
  // mergeValidateInfo,
} = useForm(loginForm, loginRules);

export const onSubmit = (cb: () => void) => {
  validate()
    .then(() => {
      console.log(toRaw(loginForm));
      cb();
    })
    .catch((err) => {
      console.log(`%c error, ${err}`, 'background: red; color: #fff');
    });
};

export function reloadQRCode(isEmployee?: boolean): void {
  if (isEmployee != null) {
    if (loginData.isEmployee === isEmployee) return;
    loginData.isEmployee = isEmployee;
  }

  loginData.isQRCodeValid = true;
  loginData.isLoading = true;
  // async reload qrcode
  setTimeout(() => {
    loginData.isLoading = false;
  }, 1000);
}

export function switchLogin(): void {
  if (!loginData.isWxLogin) {
    reloadQRCode();
  }
  loginData.isWxLogin = !loginData.isWxLogin;
}

// email login
export function getValCode(): any {
  onSubmit(async () => {
    const res: any = await emailLoginCode({
      email: loginForm.value.email,
    });
    if (res.status !== 200) return message.error(`获取验证码失败, ${res.data.msg}`);
    if (res.data.code === -1) {
      return message.warning(`${res.data.msg}`);
    }
    return message.success(`${res.data.msg}`);
  });

  // ticker
  loginData.valCodeClickable = false;
  const ticker = setInterval(() => {
    loginData.valCodeCountDown -= 1;
    if (loginData.valCodeCountDown === 0) {
      loginData.valCodeCountDown = EmailCodeInterval;
      loginData.valCodeClickable = true;
      clearInterval(ticker);
    }
  }, 1000);
}

export function loginMsg(res: any): any {
  if (res.status !== 200) return message.error(`登录失败`);
  if (res.data.code === -1) {
    return message.warning(`${res.data.msg}`);
  }
  const {
    //  user_info,
    access_token,
    refresh_token,
    uid,
  } = res.data;
  window.localStorage.setItem('access_token', access_token);
  window.localStorage.setItem('refresh_token', refresh_token);
  window.localStorage.setItem('uid', uid);
  useRouter().go(-1);
  // authLogin(user_info);
  return message.success('登录成功');
}

export function loginWithEmail() {
  onSubmit(async () => {
    console.log(`%c email login`, 'background: green; color: #fff');
    const res = await emailLogin(loginForm.value);
    loginMsg(res);
  });
}

// github oauth2 login
export function oauth2() {
  window.open('/login/github/token', '_blank');
  // window.open('/github', '_blank')
  const ticker = setInterval(async () => {
    console.log(`%c Auth...`, 'background: green; color: #fff');
    if (window.localStorage.getItem('access_token')) {
      clearInterval(ticker);
      const res = await gitLogin();
      console.log(`%c github login`, 'background: green; color: #fff');
      loginMsg(res);
    }
  }, 1000);
}
