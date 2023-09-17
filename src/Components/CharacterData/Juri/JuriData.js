import juriImage from './juri-top.png'
import p1Image from './juri-1p-image.png'
import p2Image from './juri-2p-image.png'
import anyPunch from '../CommandImages/p-any-icon.png'
import lPunch from '../CommandImages/p-l-icon.png'
import mPunch from '../CommandImages/p-m-icon.png'
import hPunch from '../CommandImages/p-h-icon.png'
import anyKick from '../CommandImages/k-any-icon.png'
import lKick from '../CommandImages/k-l-icon.png'
import mKick from '../CommandImages/k-m-icon.png'
import hKick from '../CommandImages/k-h-icon.png'
import keyPlus from '../CommandImages/plus-icon.png'
import keyDown from '../CommandImages/down-icon.png'
import keyRight from '../CommandImages/right-icon.png'
import keyLeft from '../CommandImages/left-icon.png'
import keyDR from '../CommandImages/down-right-icon.png'
import keyDL from '../CommandImages/down-left-icon.png'
import keyNutral from '../CommandImages/nutral-icon.png'
import keyNext from '../CommandImages/key-next.png'
import keyOr from '../CommandImages/or-icon.png'
import juriLPunchHB from './lPunch.gif'
import juriLKickHB from './lKick.gif'
import juriMPunchHB from './mPunch.gif'
import juriMKickHB from './mKick.gif'
import juriHPunchHB from './hPunch.gif'
import juriHKickHB from './hKick.gif'
import juriDownLPunchHB from './downLPunch.gif'
import juriDownLKickHB from './downLKick.gif'
import juriDownMPunchHB from './downMPunch.gif'
import juriDownMKickHB from './downMKick.gif'
import juriDownHPunchHB from './downHPunch.gif'
import juriDownHKickHB from './downHKick.gif'

export const juriDetails=[{
  name:"JURI",
  strongpoints:["・最高速クラスのドライブラッシュ","・リーチ・発生・持続に優れた通常技","・SA2風水エンジン使用時の択攻め"],
  weakpoints:["・風波ストック依存のコンボ火力","・弾キャラに対する対策","・SA2風水エンジンの難易度"],
  topImage:juriImage,
  p1Image:p1Image,
  p2Image:p2Image,
}]

export const juriMoves =[{
  type:"通常技",
  commands:[lPunch],
  movesName:"立ち弱P(首甲殺)",
  movesCondition:"",
  startup:4,
  active:"4-7",
  recovery:7,
  hit:5,
  block:-2,
  cancel:"〇",
  tips:["連打キャンセル対応"],
  hitboxImage:juriLPunchHB,
}, {
  type:"通常技",
  commands:[lKick],
  movesName:"立ち弱K(微弄脚)",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:9,
  hit:2,
  block:-3,
  cancel:"〇",
  tips:["連打キャンセル対応","空中ヒット時吹き飛びダウン"],
  hitboxImage:juriLKickHB,
}, {
  type:"通常技",
  commands:[mPunch],
  movesName:"立ち中P(胸破殺)",
  movesCondition:"",
  startup:6,
  active:"6-9",
  recovery:12,
  hit:7,
  block:2,
  cancel:"〇",
  tips:[""],
  hitboxImage:juriMPunchHB,
}, {
  type:"通常技",
  commands:[mKick],
  movesName:"立ち中K(伸腿蹴)",
  movesCondition:"",
  startup:5,
  active:"5-10",
  recovery:17,
  hit:3,
  block:-4,
  cancel:"〇",
  tips:[],
  hitboxImage:juriMKickHB,
}, {
  type:"通常技",
  commands:[hPunch],
  movesName:"立ち強P(蜘殺)",
  movesCondition:"",
  startup:10,
  active:"10-12",
  recovery:24,
  hit:1,
  block:5,
  cancel:"〇",
  tips:[""],
  hitboxImage:juriHPunchHB,
}, {
  type:"通常技",
  commands:[hKick],
  movesName:"立ち強K(空耀脚)",
  movesCondition:"",
  startup:17,
  active:"17-20",
  recovery:19,
  hit:2,
  block:-3,
  cancel:"×",
  tips:["PC、空中C/PC時吹き飛びダウン","空中ヒットでパニッシュカウンター時吹き飛び時間延長"],
  hitboxImage:juriHKickHB,
}, {
  type:"通常技",
  commands:[keyDown, keyPlus, lPunch],
  movesName:"しゃがみ弱P(狙腓打)",
  movesCondition:"",
  startup:4,
  active:"4-6",
  recovery:8,
  hit:4,
  block:-1,
  cancel:"〇",
  tips:["連打キャンセル可能"],
  hitboxImage:juriDownLPunchHB,
}, {
  type:"通常技",
  commands:[keyDown, keyPlus, lKick],
  movesName:"しゃがみ弱K(踵打)",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:8,
  hit:3,
  block:-1,
  cancel:"×",
  tips:["連打キャンセル可能"],
  hitboxImage:juriDownLKickHB,
}, {
  type:"通常技",
  commands:[keyDown, keyPlus, mPunch],
  movesName:"しゃがみ中P(妖撞)",
  movesCondition:"",
  startup:6,
  active:"6-9",
  recovery:14,
  hit:5,
  block:-2,
  cancel:"〇",
  tips:[""],
  hitboxImage:juriDownMPunchHB,
}, {
  type:"通常技",
  commands:[keyDown, keyPlus, mKick],
  movesName:"しゃがみ中K(剥影脚)",
  movesCondition:"",
  startup:8,
  active:"8-10",
  recovery:19,
  hit:1,
  block:-6,
  cancel:"〇",
  tips:[""],
  hitboxImage:juriDownMKickHB,
}, {
  type:"通常技",
  commands:[keyDown, keyPlus, hPunch],
  movesName:"しゃがみ強P(穿開脚)",
  movesCondition:"",
  startup:8,
  active:"8-11",
  recovery:23,
  hit:3,
  block:-11,
  cancel:"〇",
  tips:[""],
  hitboxImage:juriDownHPunchHB,
  }, {
  type:"通常技",
  commands:[keyDown, keyPlus, hKick],
  movesName:"しゃがみ強K(刈脚)",
  movesCondition:"",
  startup:10,
  active:"10-22",
  recovery:23,
  hit: "own",
  block: -1,
  cancel: "",
  tips:["CorPCヒット時ダウン時間延長"],
  hitboxImage:juriDownHKickHB,
},{
  type:"特殊技",
  commands:[keyRight,keyPlus,mPunch],
  movesName:"狂背掌",
  movesCondition:"",
  startup:8,
  active:"8-10",
  recovery:17,
  hit:4,
  block:-3,
  cancel:"〇",
  tips:[""],
}, {
  type:"特殊技",
  commands:[keyRight, keyPlus, mKick],
  movesName:"殲廻脚",
  movesCondition:"",
  startup:21,
  active:"21-22",
  recovery:23,
  hit:2,
  block:-3,
  cancel:"×",
  tips:["空振り時硬直2F増加"],
}, {
  type:"特殊技",
  commands:[keyRight, keyPlus, hKick],
  movesName:"連剋脚",
  movesCondition:"",
  startup:15,
  active:"15-25",
  recovery:20,
  hit:2,
  block:-4,
  cancel:"〇",
  tips:["空中ヒット時吹き飛びダウン"],
}, {
  type:"特殊技",
  commands:[keyLeft, keyPlus, hKick],
  movesName:"鉤鎌斬",
  movesCondition:"",
  startup:10,
  active:"10-21",
  recovery:19,
  hit:-2,
  block:-6,
  cancel:"〇",
  tips:["初段空中ヒット時吹き飛びダウン","2段目空中ヒット時叩きつけダウン"],
}, {
  type:"特殊技",
  commands:[mPunch, keyNext, keyLeft, keyPlus, hPunch],
  movesName:"死紋蹴(2段目)",
  movesCondition:"",
  startup:12,
  active:"12-14",
  recovery:19,
  hit:"Down",
  block:-3,
  cancel:"×",
  tips:[""],
}, {
  type:"特殊技",
  commands:[keyNext, hPunch],
  movesName:"死紋蹴(3段目)",
  movesCondition:"(死紋蹴2段目後に)",
  startup:17,
  active:"17-19",
  recovery:27,
  hit:"Down",
  block:-16,
  cancel:"×",
  tips:[""],
},{
  type:"必殺技",
  commands:[keyDown, keyDL, keyLeft, keyPlus, lKick],
  movesName:"弱 風破刃",
  movesCondition:"",
  startup:10,
  active:"10-13",
  recovery:21,
  hit:"Down",
  block:-4,
  cancel:"SA3",
  tips:["8-13F相殺判定","10F目で風波ストックが1増加","空振り時硬直2F増加"],
}, {
  type:"必殺技",
  commands:[keyDown, keyDL, keyLeft, keyPlus, mKick],
  movesName:"中 風破刃",
  movesCondition:"",
  startup:13,
  active:"13-16",
  recovery:21,
  hit:"Down",
  block:-6,
  cancel:"SA3",
  tips:["11-16相殺判定","10F目で風波ストックが1増加"],
}, {
  type:"必殺技",
  commands:[keyDown, keyDL, keyLeft, keyPlus, hKick],
  movesName:"強 風破刃",
  movesCondition:"",
  startup:25,
  active:"25-28",
  recovery:20,
  hit:"Down",
  block:-8,
  cancel:"SA3",
  tips:["23-28F相殺判定","25F目で風波ストックが1増加"]
}, {
  type:"必殺技",
  commands:[keyDown, keyDL, keyLeft, keyPlus, anyKick, anyKick],
  movesName:"OD 風破刃",
  movesCondition:"",
  startup:16,
  active:16-19,
  recovery:23,
  hit:"Down",
  block:-12,
  cancel:"SA2",
  tips:["14-19F相殺判定","16F目で風波ストックが1増加"],
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, lKick],
  movesName:"歳破衝",
  movesCondition:"",
  startup:16,
  active:"",
  recovery:"全体45",
  hit:-2,
  block:-8,
  cancel:"SA3",
  tips:[""],
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, lKick],
  movesName:"[強化版]歳破衝",
  movesCondition:"",
  startup:16,
  active:"",
  recovery:"全体45",
  hit:1,
  block:-3,
  cancel:"SA3",
  tips:["風破ストックがある時に[強化版]暗剣殺/[強化版]五黄殺に派生可能"]
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, lKick, mKick],
  movesName:"OD 歳破衝",
  movesCondition:"",
  startup:11,
  active:"",
  recovery:"全体38",
  hit:"Down",
  block:-2,
  cancel:"SA2",
  tips:["風破ストックがある時にOD暗剣殺/OD五黄殺に派生可能"],
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, mKick],
  movesName:"暗剣殺",
  movesCondition:"",
  startup:24,
  active:"24-27",
  recovery:19,
  hit:3,
  block:-10,
  cancel:"SA3",
  tips:["8-27F空中判定","空中ヒット時叩きつけダウン"]
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, mKick],
  movesName:"[強化版]暗剣殺",
  movesCondition:"",
  startup:24,
  active:"24-27",
  recovery:19,
  hit:8,
  block:-10,
  cancel:"SA3",
  tips:["8-27F空中判定","風破ストックがある時に[強化版]歳破衝/[強化版]五黄殺に派生可能","空中ヒット時叩きつけダウン"]
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, lKick, hKick],
  movesName:"OD 暗剣殺",
  movesCondition:"",
  startup:24,
  active:"24-27",
  recovery:19,
  hit:9,
  block:-10,
  cancel:"SA2",
  tips:["8-27F空中判定","風破ストックがある時にOD歳破衝/OD五黄殺に派生可能","空中ヒット時床バウンド"]
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, hKick],
  movesName:"五黄殺",
  movesCondition:"",
  startup:18,
  active:"18-21",
  recovery:27,
  hit:"Down",
  block:-11,
  cancel:"SA3",
  tips:[""],
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, hKick],
  movesName:"[強化版]五黄殺",
  movesCondition:"",
  startup:18,
  active:"18-36",
  recovery:27,
  hit:"Down",
  block:-10,
  cancel:"SA3",
  tips:["風破ストックがある時に[強化版]歳破衝/[強化版]暗剣殺に派生可能"],
}, {
  type:"必殺技",
  commands:[keyDown, keyDR, keyRight, keyPlus, mKick, hKick],
  movesName:"OD 五黄殺",
  movesCondition:"",
  startup:18,
  active:"18-69",
  recovery:28,
  hit:"Down",
  block:-16,
  cancel:"SA2",
  tips:["風破ストックがある時にOD歳破衝/OD暗剣殺に派生可能"]
}, {
  type:"必殺技",
  commands:[keyRight, keyDown, keyDR, keyPlus, lPunch],
  movesName:"弱 天穿輪",
  movesCondition:"",
  startup:11,
  active:"11-17",
  recovery:22,
  hit:"Down",
  block:-8,
  cancel:"SA3",
  tips:[""],
}, {
  type:"必殺技",
  commands:[keyRight, keyDown, keyDR, keyPlus, mPunch],
  movesName:"中 天穿輪",
  movesCondition:"",
  startup:5,
  active:"5-24",
  recovery:"着地後14",
  hit:"Down",
  block:-37,
  cancel:"×",
  tips:["1-8F空中判定の攻撃に対して無敵","8-48F空中判定"],
}, {
  type:"必殺技",
  commands:[keyRight, keyDown, keyDR, keyPlus, hPunch],
  movesName:"強 天穿輪",
  movesCondition:"",
  startup:5,
  active:"5-24",
  recovery:"着地後14",
  hit:"Down",
  block:-37,
  cancel:"×",
  tips:["1-8F空中判定の攻撃に対して無敵","8-48F空中判定"]
}, {
  type:"必殺技",
  commands:[keyRight, keyDown, keyDR, keyPlus, anyPunch, anyPunch],
  movesName:"OD 天穿輪",
  movesCondition:"",
  startup:6,
  active:"6-24",
  recovery:"着地後19",
  hit:"Down",
  block:-48,
  cancel:"×",
  tips:["1-9F完全無敵","ヒット時のみ最終段に派生"],
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,anyKick],
  movesName:"疾空閃",
  movesConition:"(前ジャンプ中に)",
  startup:18,
  active:"18-着地まで",
  recovey:"着地後18",
  hit:"",
  block:"",
  cancel:"×",
  tips:[],
},{
  type:"必殺技",
  commands:[keyDown,keyDL,keyLeft,keyPlus,anyKick,anyKick],
  movesName:"OD 疾空閃",
  movesConition:"(前ジャンプ中に)",
  movesCondition:"",
  startup:16,
  active:"16-着地まで",
  recovey:"着地後18",
  hit:"",
  block:"",
  cancel:"×",
  tips:[],
},{
  type:"必殺技",
  commands:[anyKick],
  movesName:"死連閃",
  movesConition:"(疾空閃後に)",
  movesCondition:"",
  startup:6,
  active:"6-38",
  recovey:"着地後12",
  hit:"",
  block:"",
  cancel:"×",
  tips:[],
},{
  type:"必殺技",
  commands:[anyKick],
  movesName:"OD 死連閃",
  movesConition:"(OD疾空閃後に)",
  movesCondition:"",
  startup:6,
  active:"6-38",
  recovey:"着地後7",
  hit:"",
  block:"",
  cancel:"×",
  tips:[],
},{
  type:"スーパーアーツ",
  commands:[keyDown, keyDR, keyRight, keyDown, keyDR, keyRight, keyPlus, anyKick],
  movesName:"SA1 殺界風破斬",
  movesCondition:"",
  startup:7,
  active:"",
  recovery:"全体201",
  hit:"Down",
  block:-22,
  cancel:"×",
  tips:["1-8F打撃・投げ無敵","最低保証ダメージ30%","C/PCで数値が変動しない","ボタンホールドで風波ストックを1つ消費し300ダメージアップ"],
},{
  type:"スーパーアーツ",
  commands:[keyDown, keyDL, keyLeft, keyDown, keyDL, keyLeft, keyPlus, anyPunch],
  movesName:"SA2 風水エンジン",
  movesCondition:"",
  startup:"",
  active:"",
  recovery:"全体7",
  hit:"",
  block:"",
  cancel:"×",
  tips:["発動中地上、空中でチェーンコンボが可能","同じ強度もしくは上の強度のP/Kに移行可能、逆走は出来ない","全ての通常技と一部の特殊技が必殺技キャンセル可能になる","暗転中ボタンホールド突進に派生"],
},{
  type:"スーパーアーツ",
  commands:[anyPunch],
  movesName:"SA2 風水エンジン(突進)",
  movesCondition:"(風水エンジン発動暗転中にホールド)",
  startup:9,
  active:"9-19",
  recovery:"26",
  hit:-4,
  block:-17,
  cancel:"×",
  tips:["最低保証ダメージ40%","C/PCで数値が変動しない","ボタンホールドで突進","空中ヒット時吹き飛びダウン","通常技、特殊技、必殺技、SA、ドライブインパクトでキャンセル可能"],
},{
  type:"スーパーアーツ",
  commands:[keyDown, keyDL, keyLeft, keyDown, keyDL, keyLeft, keyPlus, anyKick],
  movesName:"SA3 回旋断界落",
  movesCondition:"",
  startup:10,
  active:"10-13",
  recovery:52,
  hit:"Down",
  block:-31,
  cancel:"×",
  tips:["1-13F完全無敵","最低保証ダメージ50%","C/PCで数値が変動しない","HP25%以下でCAに変化(ダメージ500アップ)"],
},{
  type:"スーパーアーツ",
  commands:[keyDown, keyDL, keyLeft, keyDown, keyDL, keyLeft, keyPlus, anyKick],
  movesName:"CA 回旋断界落",
  movesCondition:"",
  startup:10,
  active:"10-13",
  recovery:52,
  hit:"Down",
  block:-31,
  cancel:"×",
  tips:["1-13F完全無敵","最低保証ダメージ50%","C/PCで数値が変動しない"],
},  {
  type:"投げ",
  commands:[keyNutral,keyOr,keyRight,keyPlus,lPunch,lKick],
  movesName:"蜘穿脚",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
}, {
  type:"投げ",
  commands:[keyLeft, keyPlus, lPunch, lKick],
  movesName:"苛影脚",
  movesCondition:"",
  startup:5,
  active:"5-7",
  recovery:23,
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
}, {
  type:"投げ",
  commands:[lPunch, lKick],
  movesName:"斬架閃",
  movesCondition:"(ジャンプ中に)",
  startup:5,
  active:"5-7",
  recovery:"着地後3",
  hit:"Down",
  block:"",
  cancel:"×",
  tips:[""],
}]