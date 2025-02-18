import { PrismaClient } from "@prisma/client";

const JleagueClubs: Array<string> = [
    '鹿島アントラーズ',
    '浦和レッズ',
    '柏レイソル',
    'FC東京',
    '東京ヴェルディ',
    'FC町田ゼルビア',
    '川崎フロンターレ',
    '横浜F・マリノス',
    '横浜FC',
    '湘南ベルマーレ',
    'アルビレックス新潟',
    '清水エスパルス',
    '名古屋グランパス',
    '京都サンガF.C.',
    'ガンバ大阪',
    'セレッソ大阪',
    'ヴィッセル神戸',
    'ファジアーノ岡山',
    'サンフレッチェ広島',
    'アビスパ福岡'
];

const premierClubs: Array<string> = [
    'アーセナル',
    'アストン・ヴィラ',
    'ボーンマス',
    'ブレントフォード',
    'ブライトン・アンド・ホーヴ・アルビオン',
    'チェルシー',
    'クリスタル・パレス',
    'エヴァートン',
    'フラム',
    'イプスウィッチ・タウン',
    'レスター・シティ',
    'リヴァプール',
    'マンチェスター・シティ',
    'マンチェスター・ユナイテッド',
    'ニューカッスル・ユナイテッド',
    'ノッティンガム・フォレスト',
    'サウサンプトン',
    'トッテナム・ホットスパー',
    'ウェストハム・ユナイテッド',
    'ウルヴァーハンプトン・ワンダラーズ'
];

const LaLeagaClubs: Array<string> = [
    'アラベス',
    'アスレティック・ビルバオ',
    'アトレティコ・マドリード',
    'バルセロナ',
    'セルタ・デ・ビーゴ',
    'エスパニョール',
    'ヘタフェ',
    'ジローナ',
    'ラス・パルマス',
    'レガネス',
    'マジョルカ',
    'オサスナ',
    'ラージョ・バジェカーノ',
    'レアル・ベティス',
    'レアル・マドリード',
    'レアル・ソシエダ',
    'セビージャ',
    'バレンシア',
    'バリャドリード',
    'ビジャレアル'
];

const serieAClubs: Array<string> = [
    'アタランタ',
    'ボローニャ',
    'カリアリ',
    'コモ',
    'エンポリ',
    'フィオレンティーナ',
    'ジェノア',
    'インテル',
    'ユヴェントス',
    'ラツィオ',
    'レッチェ',
    'ミラン',
    'モンツァ',
    'ナポリ',
    'パルマ',
    'ローマ',
    'サッスオーロ',
    'トリノ',
    'ウディネーゼ',
    'ヴェネツィア'
];

const bundesClubs: Array<string> = [
    'FCアウクスブルク',
    '1.FCウニオン・ベルリン',
    'VfLボーフム',
    'ヴェルダー・ブレーメン',
    'FCザンクトパウリ',
    'ボルシア・ドルトムント',
    'アイントラハト・フランクフルト',
    'SCフライブルク',
    '1.FCハイデンハイム',
    'TSG1899ホッフェンハイム',
    'ホルシュタイン・キール',
    'RBライプツィヒ',
    'バイエル・レバークーゼン',
    '1.FSVマインツ05',
    'ボルシア・メンヒェングラートバッハ',
    'バイエルン・ミュンヘン',
    'VfBシュトゥットガルト',
    'VfLヴォルフスブルク'
];

const leagueUnClubs: Array<string> = [
    'パリ・サンジェルマン',
    'オリンピック・マルセイユ',
    'ASモナコ',
    'OGCニース',
    'リールOSC',
    'オリンピック・リヨン',
    'スタッド・レンヌ',
    'RCランス',
    'FCナント',
    'スタッド・ランス',
    'トゥールーズFC',
    'モンペリエHSC',
    'RCストラスブール',
    'AJオセール',
    'アンジェSCO',
    'ル・アーヴルAC',
    'スタッド・ブレスト29',
    'ASサンテティエンヌ'
];


const prisma = new PrismaClient();
async function main() {
    const J1League = await prisma.league.create({
        data: { league_name: 'J1リーグ' },
    });

    for (const J1club of JleagueClubs) {
        await prisma.club.create({
            data: {
                club_name: J1club,
                league_id: J1League.id,
            },
        });
    }

    const premierLeague = await prisma.league.create({
        data: { league_name: 'プレミアリーグ' },
    });

    for (const premierClub of premierClubs) {
        await prisma.club.create({
            data: {
                club_name: premierClub,
                league_id: premierLeague.id,
            },
        });
    }

    const laLeaga = await prisma.league.create({
        data: { league_name: 'ラリーガ' },
    });

    for (const laLeagaClub of LaLeagaClubs) {
        await prisma.club.create({
            data: {
                club_name: laLeagaClub,
                league_id: laLeaga.id,
            },
        });
    }

    const serieA = await prisma.league.create({
        data: { league_name: 'セリエA' },
    });

    for (const serieAClub of serieAClubs) {
        await prisma.club.create({
            data: {
                club_name: serieAClub,
                league_id: serieA.id,
            },
        });
    }

    const bundesLeaga = await prisma.league.create({
        data: { league_name: 'ブンデスリーガ' },
    });

    for (const bundesClub of bundesClubs) {
        await prisma.club.create({
            data: {
                club_name: bundesClub,
                league_id: bundesLeaga.id,
            },
        });
    }

    const leagueUn = await prisma.league.create({
        data: { league_name: 'リーガアン' },
    });

    for (const leagueUnClub of leagueUnClubs) {
        await prisma.club.create({
            data: {
                club_name: leagueUnClub,
                league_id: leagueUn.id,
            },
        });
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });