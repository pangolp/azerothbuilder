<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><router-link to="/">Home</router-link></a></li>
                <li class="breadcrumb-item active" aria-current="page">Quest Request Items Locale</li>
            </ol>
        </nav>
        <p>This is the text that is displayed while the quest was not completed. If an npc gives us a quest, and if the sign is grayed out, the text that we will see while we have not completed the quest, will be this.</p>
        <p>Este es el texto que se muestra mientras la misión no fue completada. Si un npc nos otorga una quest, y si signo se ve en gris, el texto que veremos mientras no hayamos completado la misión, será este.</p>
        <form class="mb-3">
            <div class="row">
                <div class="col-12 col-md">
                    <div class="form-group">
                        <label for="IDInput">ID</label>
                        <input type="text" class="form-control" id="IDInput" aria-describedby="IDInput" v-model="QuestRequestItemsLocale.ID">
                        <small id="IDInput" class="form-text text-muted"></small>
                    </div>
                </div>
                <div class="col-12 col-md">
                    <div class="form-group">
                        <p>Locale</p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckboxesES" value="esES" v-model="QuestRequestItemsLocale.locale">
                            <label class="form-check-label" for="inlineCheckboxesES">esES</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="inlineCheckboxesMX" value="esMX" v-model="QuestRequestItemsLocale.locale">
                            <label class="form-check-label" for="inlineCheckboxesMX">esMX</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="CompletionTextInput">CompletionText</label>
                        <textarea class="form-control" id="CompletionTextInput" rows="3" v-model="QuestRequestItemsLocale.CompletionText"></textarea>
                        <small id="CompletionTextInput" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 col-md">
                    <div class="form-group">
                        <label for="VerifiedBuildInput">VerifiedBuild</label>
                        <input type="number" class="form-control" id="VerifiedBuildInput" aria-describedby="VerifiedBuildInput" v-model="QuestRequestItemsLocale.VerifiedBuild">
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
        <code id="code" v-if="QuestRequestItemsLocale.locale.length == 1">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }} - ID {{ QuestRequestItemsLocale.ID }}</span>
            </div>
            <div>
                <span class="sql">DELETE FROM</span> `quest_request_items_locale` <span class="sql">WHERE</span> `ID`={{ QuestRequestItemsLocale.ID }} <span class="sql">AND</span> `locale`='{{ QuestRequestItemsLocale.locale[0] }}';
            </div>
            <div>
                <span class="sql">INSERT INTO</span> `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) <span class="sql">VALUES</span>
            </div>
            <div>
                <span class="reset">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[0] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</span>
            </div>
        </code>
        <div id="sql" hidden="hidden" v-if="QuestRequestItemsLocale.locale.length == 1">
            <div class="line" v-if="Comment">-- {{ Comment }} - ID {{ QuestRequestItemsLocale.ID }}</div>
            <div class="line">DELETE FROM `quest_request_items_locale` WHERE `ID`={{ QuestRequestItemsLocale.ID }} AND `locale`='{{ QuestRequestItemsLocale.locale[0] }}';</div>
            <div class="line">INSERT INTO `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) VALUES</div>
            <div class="line">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[0] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</div>
        </div>
        <code id="code" v-if="QuestRequestItemsLocale.locale.length == 2">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }} - ID {{ QuestRequestItemsLocale.ID }}</span>
            </div>
            <div>
                <span class="sql">DELETE FROM</span> `quest_request_items_locale` <span class="sql">WHERE</span> `ID`={{ QuestRequestItemsLocale.ID }} <span class="sql">AND</span> <span v-if="QuestRequestItemsLocale.locale.length == 2">`locale` IN ('{{ QuestRequestItemsLocale.locale[0] }}', '{{ QuestRequestItemsLocale.locale[1]}}');</span>
            </div>
            <div>
                <span class="sql">INSERT INTO</span> `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) <span class="sql">VALUES</span>
            </div>
            <div v-for="(locale, index) in QuestRequestItemsLocale.locale" :key="index">
                <span class="reset" v-if="index == 0">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[index] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }}),</span>
                <span class="reset" v-if="index == 1">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[index] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</span>
            </div>
        </code>
        <div id="sql" hidden="hidden" v-if="QuestRequestItemsLocale.locale.length == 2">
            <div class="line" v-if="Comment">-- {{ Comment }} - ID {{ QuestRequestItemsLocale.ID }}</div>
            <div class="line">DELETE FROM `quest_request_items_locale` WHERE `ID`={{ QuestRequestItemsLocale.ID }} AND `locale` IN ('{{ QuestRequestItemsLocale.locale[0] }}', '{{ QuestRequestItemsLocale.locale[1]}}');</div>
            <div class="line">INSERT INTO `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) VALUES</div>
            <div v-for="(locale, index) in QuestRequestItemsLocale.locale" :key="index">
                <div class="line" v-if="index == 0">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[index] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }}),</div>
                <div class="line" v-if="index == 1">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale[index] }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            QuestRequestItemsLocale: {
                ID: 0,
                locale: [],
                CompletionText: '',
                VerifiedBuild: 18019
            },
            Comment: ''
        }
    },
    methods: {
        reset() {
            this.QuestRequestItemsLocale.ID = 0,
            this.QuestRequestItemsLocale.locale = [],
            this.QuestRequestItemsLocale.CompletionText = '',
            this.QuestRequestItemsLocale.VerifiedBuild = 18019,
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
