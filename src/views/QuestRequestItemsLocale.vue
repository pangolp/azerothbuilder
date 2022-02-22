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
                        <label for="localeFormControlSelect">locale</label>
                        <select class="form-control" id="localeFormControlSelect" v-model="QuestRequestItemsLocale.locale">
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
        <code id="code">
            <div v-if="Comment">
                <span class="comment">-- {{ Comment }}</span>
            </div>
            <div>
                <span>DELETE FROM</span> `quest_request_items_locale` <span>WHERE</span> `ID`={{ QuestRequestItemsLocale.ID }} <span>AND</span> `locale`='{{ QuestRequestItemsLocale.locale }}';
            </div>
            <div>
                <span>INSERT INTO</span> `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) <span>VALUES</span>
            </div>
            <div>
                <span class="reset">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</span>
            </div>
        </code>
        <div id="sql" hidden="hidden">
            <div class="line" v-if="Comment">-- {{ Comment }}</div>
            <div class="line">DELETE FROM `quest_request_items_locale` WHERE `ID`={{ QuestRequestItemsLocale.ID }} AND `locale`='{{ QuestRequestItemsLocale.locale }}';</div>
            <div class="line">INSERT INTO `quest_request_items_locale` (`ID`, `locale`, `CompletionText`, `VerifiedBuild`) VALUES</div>
            <div class="line">({{ QuestRequestItemsLocale.ID }}, '{{ QuestRequestItemsLocale.locale }}', '{{ QuestRequestItemsLocale.CompletionText }}', {{ QuestRequestItemsLocale.VerifiedBuild }});</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            QuestRequestItemsLocale: {
                ID: 0,
                locale: '',
                CompletionText: '',
                VerifiedBuild: 18019
            },
            Comment: ''
        }
    },
    methods: {
        reset() {
            this.QuestRequestItemsLocale.ID = 0,
            this.QuestRequestItemsLocale.locale = '',
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
