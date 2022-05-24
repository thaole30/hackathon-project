import React from "react";
import { Select } from "antd";
import { generalArticles } from './../data/data';
import {
    SearchOutlined
  } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Option } = Select;



function onSearchArticle(val) {
  console.log("search:", val);
}

const HelpBanner = () => {

  const navigate = useNavigate();

  function onChangeArticle(value) {
    console.log(`selected ${value}`);
    navigate(`/help/categories/General/${value}`);
  }

  return (
    <div className="help-banner f-center">
      <div style={{ width: "650px" }} className="search-section f a-center">
        <SearchOutlined className="search-icon" />
        <Select
          style={{ width: "100%" }}
          className="select-article"
          showSearch
          size="lg"
          placeholder="Search here"
          optionFilterProp="children"
          onChange={onChangeArticle}
          onSearch={onSearchArticle}
        //   filterOption={(input, option) =>
        //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        //   }
        >
          {generalArticles.map((article) => (
            <Option value={article} key={article}>
              <div style={{padding: '10px 20px'}} className="search-article-result">
                <h3 className="info my-8">{article}</h3>
                <div className="text-16">
                  Help Center &gt; General &gt; Notifications &gt; {article}
                </div>
              </div>
            </Option>
          
          ))}
        </Select>
      </div>

      <div className="decor-imgs container w-100 h-100">
        <img className="img-start-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOhSURBVHgB7ZZZaFRXGMe/79ybGZOYTLpoaTFoG6EtpUtESqUNTelDGwNCLbalBGltTVt8aqkP6oM+KLiAgrtIcFdcwAUU3OLyIEgCETEqLuCWiE6MTnSWe8655/O7E+MazSS5c8cHf8Mw9557z/Dn//2/cw7AK7rny7poEbwMVM4g+7t1seFd9zbkkMpVNGCgHX//3sXi5q4xC3LEuC1X8wtD9kd3nOiZw/++JrvGBeSAcSvaIzaUjAJoP33493dTjz8LvGS/bU8O02A+o3iqfmtNafLp54GW7J+d9z4BFmMZq3HNL8U3u3snsJL9vTNeTgifkoHmuh/zLz/vvUBK9v9+Vam0LJOQ11A3JnzqRe9mVdDCPRS+EU6OTWpZAkY0L6sOn+xpTtYEzd7fHolaiZ+NwQEW2tfnV4ePZjIvKxma3UgRFQrXAGExf++mzoZ2ZTrX9y5bcDT+Nmn6UxvIN4C3bZnYOremIJHpfF9Ltui4HGmIxpIy0rawI64Sm+eMfqOjN//hm6ClDakq45pvAVAiCiRbbZhT8XoMeokvGVrdpKtthCpAQAMGXIE7pn0x8Ab0gX47tP6EnKCM/pwvPWeIpFs/pSLUBH2kz4J2NVKBLNBTHU3vsCkybbbAff9V5B+AftAnQXvO0yCp1XTuphIvM+lBSxyfVG7vg37S6wztvUCDgdyZiDDYy643hsK6VltubwAf6JWgg+epDEEtJqK3+Ja4xTk01OZcseeDT2Qs6NhV9b2V5y5HxEIUQJwbBKKoUM7cv8ZgxgtfT2SUoYYW/YdyYTxfSiIWwnCtoqDUrF9HFreBj/ToUFOrrmUnJhJvSmwJdsphQejO+2lEURR85oUOnbqpZrouVrEQxaViczxFRLx7L/rhw7xLkAW6FRQlKordNkukhnI+/yrjiTGeQ4A24MZvhmM9ZIlnBF1L0JDkHdrEIeG25gXPfVRXYXDt12X+tPfzeCJDtxJUamnaxnUZwmLgYYCJvE1hW8V79lrIMg8FtTvOx4bMIa5LqVcbPox7rUQPtoRzo4aGFkIApAUlNdVYJm+3AIwYTDvTCfcUL8atToc1CQJCaE3jeQNYydIihg0RLCadXu+D1KItp/arD/AuBITgrEz3KuMJENi5yKQdQmhxknLCiEGFrRAg6BrS0iUl+QihNUiHf5VLkrQYPexNPAMB41XoCC96aYe6VmELxORciEnDLT00qczeWMrE2hLmQmuHngg55D4xmY4wUDVTDQAAAABJRU5ErkJggg==" alt="" />
        <img className="img-moon" src="https://crowdhack.io/static/media/moon.5fa58e40.png" alt="" />
        <img className="img-galaxy-1" src="https://crowdhack.io/static/media/galaxy.f0d8969d.png" alt="" />
        <img className="img-start-2" src="data:image/png;base64,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" alt="" />
        <img className="img-start-3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAvCAYAAABzJ5OsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAT0SURBVHgB7ZhrbFRVEMdnzt0XffjAQhNTggKGBgymhA+gJZRISKyEpDYQ+eAzrdUSNcbEBBVCaKQfTCSYqAmgWEtAS2OoIoSkWGO0QvzQiFWoaDUqFLspbJ/bu/ecM8657ZaKFPvYx23i78vOfe3+d/Z/ZuYswP+klqK3KAumG0Xbm3z3vxuZFz/2wTThgWMU1JHYAvunQFv8HMI0oGg/hbJ8/QvVbZnnjhejHT8vwOOsbwhn54SiS/tkuG20cIOnM//woa45ygouhlmZXx1ejX3XXves5x+v78mPkrUACFuuJ9zgSds8caR3kQQr30/q/OGNGRfGus9ztin7pHu5lGKOAmitfSj77I3u9YxtNtS1BmaH7lzrAN4EROdrSzPP/tcznhBf2URZvoFosdQYsgjD75eGvh3Pc2n3/EsNlB20o+uRKFsQ9avbg43jfTatmX+xiXJQDpZYJITy6Su6Z8aJPcvQGe/zaRO/43N78aCMrpUAjnJUf5+MHn9vY0bfRN4jLdVmxxfRlVLTckXCkUo5QmR8WL0Gu2CCpNzzO7+MrkIhCk1MWqPwZ5ycjHBDSsW/0WyX8AeuQhZtji2EU9Wr8RxMkpR4fv+vFOrpdMrZI7NBCAe0BgJorlqT8Q1MgaSL39fcPbO/M/Y0eySbkIUrFm7hmaqiGV/DFEmq+H3NNFP5Y89yDc8CElxYNCDCpa0rQ0chASRN/IHvBvJiMva8JOT5ilg4O4UwEpUdH0CCSEqp/KjFuW8QaIME7XeUcJTUkr9Epw4F9rxQgBFIEAnPfN33dokkWocaJOfbtQohXvY70b2VBcGECTcktFTWt9ql/GOWGH+YY7QECf4IS6maypW3XIEEk7DMH2mLbdaKCrkKOqYOmoyb9UmOPvTMvWNvKKbClMWfuESZ1CO3OBoWslzJs/jQBX7h8FjFiozTkCSmJL6xvS9X9zrVmnAmCHSbj6mFaPQLOlpWEPoMksikPX+qnXIFBF5Hgbnuu2gauYaKGh+9J/QpJJlJiW/+Y3CBg3Ivy8wFGHH4MPj7poLgQUgBE7bN6d/kg6y2UgsICU1S0VCv4CygRiscGrR2QoqYkPiWi7Lc0fQkD4WSq3fMdcqwWzSocNAXrCpehgOQIsZtmzN/qQrO8VOIZjm66b7anTWF/VZwW/FdGIYUMq7M/9DpvMZlr5hbDzfPoQZE8ZwjkLJV9bolgZQKN9xQfJh39JEu/Tb3+KVKDTcfls7yids/Fxou7OTbtW6Jvx3SwJji/+yivIEIHeSyncuipXvS5JyGvObuhTQeWDsfT0KauK7nuwYojwfZOkJ+Fe5NNPr6UFnEmqJ5vlpII/8Sf9mmu3ln38hZznONrd3+4/rcVBezYNk19YVzfTWQZv4hvtumTbxxaODwZrMw0bR6cc3NCD+vmBN4EzzAiLR+W73Mk9Q7aP7oNGuSM8yjLVG8daI7cnXYPdZm8AiueFvRq+yHV0adR9Lxch6HOgI+q6IwH3vBIwhFtI0VbnWP4hXchFwH2TXkfj2kCz60yhbNwg7wEKZUP2YCV+hITXENY3wzPLeo5/Jn4UXwGCavd5jACB1q/UavmcmR3Nlc0ZaFOcFJ/6uVTAQnudsEwwt02DgmInNm9/wc38fgUQTL3W6CqzOL8Yob7pp7q7UbvE5M0iN9Mf1jt60jXQP6l3APlcM04G+j2C9GItzw1QAAAABJRU5ErkJggg==" alt="" />
        <img className="img-galaxy-2" src="data:image/png;base64,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" alt=""/>
      </div>
    </div>
  );
};

export default HelpBanner;
