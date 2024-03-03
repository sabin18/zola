import EmailHelper from '../helpers/EmailHelper';

class messagesController{
    
    static async sendUsMessage(req,res){
      const{ name,email,phone,message,startDate,endDate } = req.body;
      try {
        await EmailHelper.sendMsgEmail('Message from client',"Hello",email,name,phone,message,startDate,endDate)
        await EmailHelper.ReplyMsgEmail(
          '[] Thank You for Booking a tour',
          'Hey',
          email, 
          name, 
          `Thank you for booking with us! Your reservation has been successfully received. We look forward to serving you on ${startDate}. If you have any questions or need to make any changes, please contact our customer support team at +250788657132/+250780763545. Have a great day!`)

        return res.status(200).json({
            message: "Message sent successfully"
        })

      } catch(err) {
          console.log('err', err)
        return res.status(500).json({
          error: 'An error has occured, please contact  custumer support'
        })
      }
    }
  }
  
  export default messagesController;
