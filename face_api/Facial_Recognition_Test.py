import cognitive_face as CF



KEY = '599eab7849034cccaefbc5b447b38b74'  # Replace with a valid subscription key (keeping the quotes in place).
CF.Key.set(KEY)

#Create an empty person group
personGroupID = 'mygroup'
#if person group is not already there, then create one, else continue
'''
personID = 'b95de0f6-ded2-4178-ae7b-d144f2f9b0af'
try:
    x = CF.person_group.get(personGroupID)
    #print (x)
except:
    group = CF.person_group.create(personGroupID, name="My Group of Creators")
    #print (group)

#group = CF.person_group.delete(personGroupID)

try:
    y = CF.person.get(personGroupID, personID)
except:
    response_person = CF.person.create(personGroupID, 'Whitney')
    print (response_person)

trer = CF.person.lists(personGroupID)
print (trer)

#create a list of faces for a specific id and loop through them, adding them to the detected faces
face_list = ['http://quitmumbling.com/public_html/wp-content/uploads/2012/02/whitney1.jpg', 'http://images5.fanpop.com/image/photos/30100000/Whitney-Houston-whitney-houston-30123565-738-923.jpg', 'https://worldofblackheroes.files.wordpress.com/2012/02/whitney-houston-6.jpg']
for each_image in face_list:
    pers_face_id = CF.person.add_face(each_image, personGroupID, personID)


empty_test = CF.person_group.train(personGroupID)

status = CF.person_group.get_status(personGroupID)
print (status)

#Define Frank
#Id of person group for Frank and others with name of Frank 

'''


#image to test and try to identify 
try_out_image = 'http://thatgrapejuice.net/wp-content/uploads/2016/08/frank-ocean-endless-thatgrapejuice-600x600.jpg'
retrn_lst = CF.face.detect(try_out_image)
#print (retrn_lst[0]['faceId'])

answr = CF.face.identify([retrn_lst[0]['faceId']], personGroupID)
print (CF.person.get(personGroupID, answr[0]['candidates'][0]['personId']))