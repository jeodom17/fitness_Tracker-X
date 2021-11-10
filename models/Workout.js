
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WoSchema = new Schema();

WoSchema.add({
    day: {
        type: Date,
        default: Date.now,
      },
      exercises: Array,
    });



mongoose.model('Workout', WoSchema);
