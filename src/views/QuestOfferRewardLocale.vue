<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">Quest Offer Reward Locale</li>
            </ol>
        </nav>
        <p>This table is used to display the text when the mission is completed and delivered.</p>
        <p>Esta tabla se utiliza, para mostrar el texto cuando se completó y se entrega la misión.</p>
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
                        <p>Locale</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckboxesES" value="esES" v-model="QuestOfferRewardLocale.locale">
                            <label class="form-check-label" for="inlineCheckboxesES">esES</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckboxesMX" value="esMX" v-model="QuestOfferRewardLocale.locale">
                            <label class="form-check-label" for="inlineCheckboxesMX">esMX</label>
                        </div>
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
        <code id="code" v-if="QuestOfferRewardLocale.locale.length == 1">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }} - ID {{ QuestOfferRewardLocale.ID }}</span>
            </div>
            <div>
                <span class="sql">DELETE FROM</span> `quest_offer_reward_locale` <span class="sql">WHERE</span> `ID`={{ QuestOfferRewardLocale.ID }} <span class="sql">AND</span> `locale`='{{ QuestOfferRewardLocale.locale[0] }}';
            </div>
            <div>
                <span class="sql">INSERT INTO</span> `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) <span class="sql">VALUES</span>
            </div>
            <div>
                <span class="reset">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[0] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</span>
            </div>
        </code>
        <div id="sql" hidden="hidden" v-if="QuestOfferRewardLocale.locale.length == 1">
            <div class="line" v-if="Comment">-- {{ Comment }} - ID {{ QuestOfferRewardLocale.ID }}</div>
            <div class="line">DELETE FROM `quest_offer_reward_locale` WHERE `ID`={{ QuestOfferRewardLocale.ID }} AND `locale`='{{ QuestOfferRewardLocale.locale[0] }}';</div>
            <div class="line">INSERT INTO `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) VALUES</div>
            <div class="line">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[0] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</div>
        </div>
        <code id="code" v-if="QuestOfferRewardLocale.locale.length == 2">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }} - ID {{ QuestOfferRewardLocale.ID }}</span>
            </div>
            <div>
                <span class="sql">DELETE FROM</span> `quest_offer_reward_locale` <span class="sql">WHERE</span> `ID`={{ QuestOfferRewardLocale.ID }} <span class="sql">AND</span> <span v-if="QuestOfferRewardLocale.locale.length == 2">`locale` IN ('{{ QuestOfferRewardLocale.locale[0] }}', '{{ QuestOfferRewardLocale.locale[1]}}');</span>
            </div>
            <div>
                <span class="sql">INSERT INTO</span> `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) <span class="sql">VALUES</span>
            </div>
            <div>
                <div v-for="(locale, index) in QuestOfferRewardLocale.locale" :key="index">
                    <span class="reset" v-if="index == 0">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[index] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }}),</span>
                    <span class="reset" v-if="index == 1">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[index] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</span>
                </div>
            </div>
        </code>
        <div id="sql" hidden="hidden" v-if="QuestOfferRewardLocale.locale.length == 2">
            <div class="line" v-if="Comment">-- {{ Comment }} - ID {{ QuestOfferRewardLocale.ID }}</div>
            <div class="line">DELETE FROM `quest_offer_reward_locale` WHERE `ID`={{ QuestOfferRewardLocale.ID }} AND `locale` IN ('{{ QuestOfferRewardLocale.locale[0] }}', '{{ QuestOfferRewardLocale.locale[1]}}');</div>
            <div class="line">INSERT INTO `quest_offer_reward_locale` (`ID`, `locale`, `RewardText`, `VerifiedBuild`) VALUES</div>
            <div v-for="(locale, index) in QuestOfferRewardLocale.locale" :key="index">
                <div class="line" v-if="index == 0">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[index] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }}),</div>
                <div class="line" v-if="index == 1">({{ QuestOfferRewardLocale.ID }}, '{{ QuestOfferRewardLocale.locale[index] }}', '{{ QuestOfferRewardLocale.RewardText }}', {{ QuestOfferRewardLocale.VerifiedBuild }});</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            QuestOfferRewardLocale: {
                ID: 0,
                locale: ['esES', 'esMX'],
                RewardText: '',
                VerifiedBuild: 18019
            },
            Comment: ''
        }
    },
    methods: {
        reset() {
            this.QuestOfferRewardLocale.ID = 0,
            this.QuestOfferRewardLocale.locale = ['esES', 'esMX'],
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

    .sql {
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
