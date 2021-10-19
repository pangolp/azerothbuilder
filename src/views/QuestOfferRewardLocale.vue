<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">Quest Offer Reward Locale</li>
            </ol>
        </nav>
        <form class="mb-3">
            <div class="row">
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="IDInput">ID</label>
                        <input type="text" class="form-control" id="IDInput" aria-describedby="IDInput" v-model="QuestOfferRewardLocale.ID">
                        <small id="IDInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="localeFormControlSelect">locale</label>
                        <select class="form-control" id="localeFormControlSelect" v-model="QuestOfferRewardLocale.locale">
                            <option>koKR</option>
                            <option>frFR</option>
                            <option>deDE</option>
                            <option>zhCN</option>
                            <option>zhTW</option>
                            <option>esES</option>
                            <option>esMX</option>
                            <option>ruRU</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="RewardTextInput">RewardText</label>
                        <textarea class="form-control" id="RewardTextInput" rows="3" v-model="QuestOfferRewardLocale.RewardText"></textarea>
                        <small id="RewardTextInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="VerifiedBuildInput">VerifiedBuild</label>
                        <input type="number" class="form-control" id="VerifiedBuildInput" aria-describedby="VerifiedBuildInput" v-model="QuestOfferRewardLocale.VerifiedBuild">
                        <small id="VerifiedBuildInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="CommentInput">Comment</label>
                        <input type="text" class="form-control" id="CommentInput" aria-describedby="CommentInput" v-model="Comment">
                        <small id="CommentInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-warning" @click="reset">Reset</button>
            <button type="button" class="btn btn-success ml-3" @click="copySQL">Copy SQL</button>
        </form>
        <code id="code">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }}</span>
            </div>
            <div>
                <span>DELETE FROM</span> `quest_offer_reward_locale` <span>WHERE</span> `ID`={{ QuestOfferRewardLocale.ID }} <span>AND</span> `locale`='{{ QuestOfferRewardLocale.locale }}';
            </div>
            <div>
                <span>INSERT INTO</span> `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) <span>VALUES</span>
            </div>
            <div>
                <span class="reset">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</span>
            </div>
        </code>
        <div id="sql" hidden="hidden">
            <div class="line" v-if="Comment">-- {{ Comment }}</div>
            <div class="line">DELETE FROM `quest_offer_reward_locale` WHERE `ID`={{ QuestOfferRewardLocale.ID }} AND `locale`='{{ QuestOfferRewardLocale.locale }}';</div>
            <div class="line">INSERT INTO `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) VALUES</div>
            <div class="line">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            QuestOfferRewardLocale: {
                ID: 0,
                locale: '',
                RewardText: '',
                VerifiedBuild: 18019
            },
            Comment: ''
        }
    },
    methods: {
        reset() {
            this.QuestOfferRewardLocale.ID = 0,
            this.QuestOfferRewardLocale.locale = '',
            this.QuestOfferRewardLocale.RewardText = '',
            this.QuestOfferRewardLocale.VerifiedBuild = 18019,
            this.Comment = ''
        },
        copySQL() {
            let lines = document.getElementsByClassName('line')
            let sqlsentencia = ""
            let sentencias = [].map.call(lines, line => line.textContent)
            for (let sentencia of sentencias) {
                sqlsentencia += sentencia + '\n'
            }
            const textArea = document.createElement('textarea')
            textArea.textContent = sqlsentencia
            document.body.append(textArea)
            textArea.select()
            document.execCommand('copy')
            textArea.setAttribute("hidden", "hidden")
        }
    }
}
</script>

<style scoped>
    code {
        color: #000;
    }

    code span {
        color: #00F;
    }

    #code p {
        padding: 0;
        margin: 0;
    }

    form {
        padding-top: 1em;
    }

    .reset {
        color: #000;
    }

    .comment {
        color: #690808;
    }
</style>
