const { Schema, model, Types, default: mongoose } = require('mongoose')

const userSchema = new Schema(
    {
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
    },
    thoughts: [
        {
            type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
        }
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }  
);

userSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', userSchema);
// export the User model
module.exports = User;