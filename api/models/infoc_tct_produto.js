import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class infoc_tct_produto extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id_produto: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'infoc_tct_categorias',
        key: 'id_categoria'
      }
    },
    nm_produto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nr_codigo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ds_embalagem: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nm_marca: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ds_peso: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ds_descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    vl_preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    bt_promocao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
<<<<<<< HEAD
    },
    img_imagem: {
      type: DataTypes.STRING(255),
      allowNull: true
=======
>>>>>>> 0b69e9009e6de1f4d82964f4d2583c9f2ff0b863
    }
  }, {
    sequelize,
    tableName: 'infoc_tct_produto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_produto" },
        ]
      },
      {
        name: "id_categoria",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
    ]
  });
  return infoc_tct_produto;
  }
}
