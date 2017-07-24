import cognitive_face as CF



KEY = '599eab7849034cccaefbc5b447b38b74'  # Replace with a valid subscription key (keeping the quotes in place).
CF.Key.set(KEY)

#Create an empty person group
personGroupID = 'mygroup'
#if person group is not already there, then create one, else continue
personID = '0438a6a4-11bf-456d-a2db-33daf460d040'
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
    response_person = CF.person.create(personGroupID, 'Frank')
    print (response_person)

trer = CF.person.lists(personGroupID)
print (trer)
'''
#create a list of faces for a specific id and loop through them, adding them to the detected faces
face_list = ['http://imb.ulximg.com/image/full/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/a245b9e81dc871ea925875c94046d072/1392853723_frank_ocean_86.jpg', 'http://imb.ulximg.com/image/full/artist/1392853723_dd7bf404602d4647b315404d9a76a123.jpg/a245b9e81dc871ea925875c94046d072/1392853723_frank_ocean_86.jpg', 'http://static.highsnobiety.com/wp-content/uploads/2017/02/24192031/frank-ocean-beats-1-radio-show-blonded-radio-01-1200x801.jpg']
for each_image in face_list:
    pers_face_id = CF.person.add_face(each_image, personGroupID, personID)
'''

empty_test = CF.person_group.train(personGroupID)

status = CF.person_group.get_status(personGroupID)
print (status)

#Define Frank
#Id of person group for Frank and others with name of Frank 




# You can use this example JPG or replace the URL below with your own URL to a JPEG image.
#img_url = 'https://raw.githubusercontent.com/Microsoft/Cognitive-Face-Windows/master/Data/detection1.jpg'
#img_url = 'http://theurbantwist.com/wp-content/uploads/2016/10/10192016-frank-ocean-1024x768.jpg'
#result = CF.face.detect(img_url)
#print (result)
