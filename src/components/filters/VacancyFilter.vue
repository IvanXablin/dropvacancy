<template>
  <div class="vacancy-filter">
    <el-scrollbar height="700px">
      <div class="vacancy-filter__item">
        <p>Сферы</p>
        <el-button type="primary">Выбрать</el-button>
      </div>

      <div class="vacancy-filter__item">
        <p>Зарплата</p>
        <el-radio-group>
          <el-radio :label="1">До 100К</el-radio>
          <el-radio :label="2">От 150К</el-radio>
          <el-radio :label="3">От 350К</el-radio>
        </el-radio-group>
      </div>

      <div class="vacancy-filter__item">
        <p>Локация</p>
        <el-checkbox-group>
          <el-checkbox label="Москва" />
          <el-checkbox label="Санкт-Петербург" />
          <el-checkbox label="Новосибирск" />
        </el-checkbox-group>
      </div>

      <div class="vacancy-filter__item">
        <p>Уровень навыков</p>
        <el-checkbox-group>
          <el-checkbox label="Junior" />
          <el-checkbox label="Middle" />
          <el-checkbox label="Senior" />
          <el-checkbox label="Teamlead / Manager" />
        </el-checkbox-group>
      </div>

      <div class="vacancy-filter__item">
        <p>Период размещения</p>
        <el-radio-group>
          <el-radio :label="1">За все время</el-radio>
          <el-radio :label="2">За месяц</el-radio>
          <el-radio :label="3">За неделю</el-radio>
          <el-radio :label="4">За последние три дня</el-radio>
          <el-radio :label="5">За сутки</el-radio>
        </el-radio-group>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss">
.vacancy-filter {
  width: 300px;
  padding: 20px;
  margin: 10px;

  &__item {
    margin: 30px;
    padding: 10px;

    p {
      font-size: 20px;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
}
</style>